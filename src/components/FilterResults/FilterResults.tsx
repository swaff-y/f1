import { FC } from "react";
import { Table } from "react-bootstrap";

interface FilterResultsProps {
  data: any;
  filterOptions: any;
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
          { filterOptions.map((option: any, index: number) => (
            <th 
              key={index}
              className='filter-results-header'
            >{ option.label }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((meeting: any, index: number) => (
          <tr key={index}>
            { filterOptions.map((option: any, index: number) => (
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
                  { meeting[option.id] }
                </td>
            )}
          </tr>
        )) }
      </tbody>
    </Table>
  );
}; 