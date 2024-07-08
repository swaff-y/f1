import { Placeholder, Table } from "react-bootstrap"

const NUM_COLUMNS = 7;

const TableRow = () => {
  return (
    <tr className='filter-results-cell'>
      { Array.from({ length: NUM_COLUMNS }).map((_, index) => (
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


export const FilterResultsLoader = () => {
  return (
    <Table
      striped
      bordered
      variant="dark"
      responsive
    >
      <thead>
        <tr>
          <th>Year</th>
          <th>GP Name</th>
          <th>GP Key</th>
          <th>Country</th>
          <th>Country Key</th>
          <th>Circuit Name</th>
          <th>Circuit Key</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
      </tbody>
    </Table>
  );
};