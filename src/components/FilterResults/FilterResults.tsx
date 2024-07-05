import { FC } from "react";
import { Button, Card, Table } from "react-bootstrap";

interface FilterResultsProps {
  selection: { label: string, id: string };
};

export const FilterResults: FC<FilterResultsProps> = ({ selection }) => {
  return (
    <Table 
      striped
      bordered
      variant="dark"
    >
      <thead>
        <tr>
          <th>{ selection.label }</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}; 