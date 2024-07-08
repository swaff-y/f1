import { FC } from "react";
import { Table } from "react-bootstrap";

interface FilterResultsProps {
  selection: { label: string, id: string };
  data: any;
};

export const FilterResults: FC<FilterResultsProps> = ({ selection, data }) => {
  return (
    <Table 
      striped
      bordered
      variant="dark"
      responsive
    >
      <thead>
        <tr>
          <th>{ selection.label }</th>
          <th>Meeting Official Name</th>
          <th>Country</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        { data.map((meeting: any, index: number) => (
          <tr key={index}>
            <td>{ meeting[selection.id] }</td>
            <td>{ meeting.meeting_official_name }</td>
            <td>{ meeting.country_name }</td>
            <td>{ meeting.date_start }</td>
          </tr>
        )) }
      </tbody>
    </Table>
  );
}; 