import { FC } from "react";
import { Placeholder, Table } from "react-bootstrap"

interface FilterResultsLoaderProps {
  filterOptions: {
    label: string;
    id: string;
  }[];
};

const TableRow: FC<FilterResultsLoaderProps> = ({ filterOptions }) => {
  return (
    <tr className='filter-results-cell'>
      { filterOptions.map((_, index) => (
        <td key={index} >
          <Placeholder 
            sm={12}
            bg="secondary"
            as='span'
            key={index} 
          />
        </td>
      ))}
    </tr>
  );
};


export const FilterResultsLoader: FC<FilterResultsLoaderProps> = ({ filterOptions }) => {
  return (
    <Table
      striped
      bordered
      variant="dark"
      responsive
    >
      <thead>
        <tr>
          { filterOptions.map((option, index) => (
            <th 
              key={index}
              className='filter-results-header'
            >{ option.label }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableRow filterOptions={filterOptions} />
        <TableRow filterOptions={filterOptions} />
      </tbody>
    </Table>
  );
};