import { FC } from "react";
import { Button, Card, Placeholder, Table } from "react-bootstrap";
import { Utils } from "../../../utils/Utils";
import { useDrivers } from "../../../hooks/useDrivers";
import { useSessions } from "../../../hooks/useSessions";
import { useMeeting } from "../../../hooks/useMeeting";
import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { ClickResultsLoader } from "../../../components/Loaders/ClickResultsLoader/ClickResultsLoader";
import { useNavigate } from "react-router-dom";

interface MeetingClickResultsProps {
  meeting_key: number;
};

export const MeetingClickResults: FC<MeetingClickResultsProps> = ({ meeting_key }) => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useMeeting({ meeting_key });
  
  return (
    <>
    { isLoading &&
      <SectionContainer>
        <ClickResultsLoader />
      </SectionContainer>
    }
    { isSuccess &&
      <SectionContainer>
        <Card
          bg="dark"
          text="light"
        >
          <Card.Header>
            <Card.Title>
              {Utils.toTitleCase(data.meeting_official_name)}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <tbody>
                <tr>
                  <th>Key</th>
                  <td>{data.meeting_key}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{data.meeting_name}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>{Utils.toISODate(data.date_start)}</td>
                </tr>
                <tr>
                  <th>Circuit</th>
                  <td>{data.circuit_short_name}</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>{data.country_name}</td>
                </tr>
                <tr>
                  <th>Sessions</th>
                  <td>
                    <Button 
                      size="sm"
                      variant="outline-light"
                      className='meeting-view-button'
                      onClick={() => navigate(`/home/sessions?meeting_key=${data.meeting_key}`)}
                    >
                      View Sessions
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th>Drivers</th>
                  <td>
                    <Button 
                      size="sm"
                      variant="outline-light"
                      className='meeting-view-button'
                      onClick={() => navigate(`/home/drivers?meeting_key=${data.meeting_key}`)}
                    >
                      View Drivers
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </SectionContainer>
      }
    </>
  );
};