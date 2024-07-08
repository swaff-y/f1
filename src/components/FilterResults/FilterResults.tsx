import { FC } from "react";
import { Table } from "react-bootstrap";
import { FilterOption } from "../Meetings/useMeetingFilter";
import { Meeting } from "../../models/Meeting";

interface FilterResultsProps {
  data: Meeting[];
  filterOptions: FilterOption[];
};

export const FilterResults: FC<FilterResultsProps> = ({ data, filterOptions }) => {
  return (
    <Table 
      striped
      bordered
      variant="dark"
      responsive
    >
      <thead>
        <tr>
          { filterOptions.map((option: FilterOption, index: number) => (
            <th 
              key={index}
              className='filter-results-header'
            >{ option.label }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((meeting: Meeting, index: number) => (
          <tr key={index}>
            { filterOptions.map((option: FilterOption, index: number) => (
              option.id === 'date_start') ?
                <td 
                  key={index}
                  className='filter-results-cell'
                >
                    { new Date(meeting[option.id]).toISOString().split('T')[0] }
                </td> :
                <td 
                  key={index}
                  className='filter-results-cell'
                >
                  { (meeting as any)[option.id] }
                </td>
            )}
          </tr>
        )) }
      </tbody>
    </Table>
  );
}; 