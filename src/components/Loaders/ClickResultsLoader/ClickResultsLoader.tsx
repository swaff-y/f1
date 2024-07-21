import { FC } from "react";
import { Card, Placeholder, Table } from "react-bootstrap";

export const ClickResultsLoader: FC = () => {
  return (
    <Card
      bg="dark"
      text="light"
      style={{
        width: '70%',
        height: '100%'
      }}
    >
      <Card.Header>
        <Card.Title>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={12}/>
          </Placeholder>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <th><Placeholder xs={3}/></th>
              <td><Placeholder xs={6}/></td>
            </tr>
            <tr>
              <th><Placeholder xs={3}/></th>
              <td><Placeholder xs={6}/></td>
            </tr>
            <tr>
              <th><Placeholder xs={3}/></th>
              <td><Placeholder xs={6}/></td>
            </tr>
            <tr>
              <th><Placeholder xs={3}/></th>
              <td><Placeholder xs={6}/></td>
            </tr>
            <tr>
              <th><Placeholder xs={3}/></th>
              <td><Placeholder.Button xs={6} variant="light"/></td>
            </tr>
            <tr>
              <th><Placeholder xs={3}/></th>
              <td><Placeholder.Button xs={6} variant="light"/></td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};