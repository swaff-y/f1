import { FC } from "react";
import { Table } from "react-bootstrap";
import { FilterOption } from "../../hooks/useMeetingFilter";
import { Meeting } from "../../models/Meeting";
import { Utils } from "../../utils/Utils";

interface FilterResultsProps {
  data: Meeting[];
  filterOptions: FilterOption[];
  handleClick: ({ data }: { data: any }) => void;
};

export const FilterResults: FC<FilterResultsProps> = ({ 
  data, 
  filterOptions,
  handleClick
 }) => {
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
        { data.map((e: any, index: number) => (
          <tr 
            key={index}
            onClick={() => handleClick({ data: e })}
          >
            { filterOptions.map((option: FilterOption, index: number) => (
              option.id === 'date_start') ?
                <td 
                  key={index}
                  className='filter-results-cell'
                >
                    { Utils.toISODate(e[option.id]) }
                </td> :
                <td 
                  key={index}
                  className='filter-results-cell'
                >
                  { e[option.id] }
                </td>
            )}
          </tr>
        )) }
      </tbody>
    </Table>
  );
}; 