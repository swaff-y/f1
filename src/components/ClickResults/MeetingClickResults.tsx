import './clickResults.css';
import { FC } from "react";
import { Meeting } from "../../models/Meeting";
import { Button, Card, Table } from "react-bootstrap";
import { Utils } from "../../utils/Utils";

interface MeetingClickResultsProps {
  data: Meeting;
};

export const MeetingClickResults: FC<MeetingClickResultsProps> = ({ data }) => {

  return (
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
                >
                  View Drivers
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};