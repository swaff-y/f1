import './filterForm.css';
import { FC, useState } from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

interface FilterOptions {
  filterOptions: string[];
};

export const FilterForm:FC<FilterOptions> = ({ filterOptions }) => {
  const [dropdown, setDropdown] = useState('Year');
  
  return (
    <Form className="filter-form">
    <InputGroup className="mb-3">
      <DropdownButton
        variant="outline-secondary"
        title={dropdown}
        id="input-group-dropdown-1"
      >
        { filterOptions.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => setDropdown(option)}>{option}</Dropdown.Item>
        ))}
      </DropdownButton>
      <Form.Control aria-label="Text input with dropdown button" />
    </InputGroup>
    <Button 
      className="mb-3 filter-button"
      variant="dark"
    >
      Search
    </Button>
  </Form>
  )
};