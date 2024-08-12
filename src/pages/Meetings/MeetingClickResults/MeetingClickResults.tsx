import { FC } from "react";
import { Button, Card, Placeholder, Table } from "react-bootstrap";
import { Utils } from "../../../utils/Utils";
import { useDrivers } from "../../../hooks/useDrivers";
import { useSessions } from "../../../hooks/useSessions";
import { useMeeting } from "../../../hooks/useMeeting";
import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { ClickResultsLoader } from "../../../components/Loaders/ClickResultsLoader/ClickResultsLoader";

interface MeetingClickResultsProps {
  meeting_key: number;
};

export const MeetingClickResults: FC<MeetingClickResultsProps> = ({ meeting_key }) => {
  const { data, isSuccess, isLoading } = useMeeting({ meeting_key });
  const {
    data: meetingSessions, 
    isSuccess: isSessionsSuccess,
    isLoading: isSessionsLoading,
    isError: isSessionsError,
  } = useSessions({ meeting_key });
  const {
    data: meetingDrivers, 
    isSuccess: isDriversSuccess,
    isLoading: isDriversLoading,
    isError: isDriversError,
  } = useDrivers({ meeting_key });

  if (isSessionsSuccess && meetingSessions) data.setSessions(meetingSessions);
  if (isDriversSuccess && meetingDrivers) data.setDrivers(meetingDrivers);
  
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
                    { isSessionsLoading && 
                      <Placeholder.Button
                        className='meeting-view-button'
                        variant='outline-light'
                        xs={6}
                      />}
                    { isSessionsError && <p>Error fetching sessions</p> }
                    { isSessionsSuccess && 
                      <Button 
                        size="sm"
                        variant="outline-light"
                        className='meeting-view-button'
                      >
                        View Sessions
                      </Button>
                    }
                  </td>
                </tr>
                <tr>
                  <th>Drivers</th>
                  <td>
                    { isDriversLoading && 
                      <Placeholder.Button
                        className='meeting-view-button'
                        variant='outline-light'
                        xs={6}
                      />}
                    { isDriversError && <p>Error fetching drivers</p> }
                    { isDriversSuccess && 
                      <Button 
                        size="sm"
                        variant="outline-light"
                        className='meeting-view-button'
                      >
                        View Drivers
                      </Button>
                    }
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