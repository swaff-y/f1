import './filterForm.css';
import { FC } from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

type FilterAttributes = {
  id: string;
  label: string;
};
interface FilterOptions {
  filterOptions: FilterAttributes[];
  setSelection: (selection: FilterAttributes) => void;
  selection: FilterAttributes;
};

export const FilterForm:FC<FilterOptions> = ({ 
  filterOptions,
  setSelection,
  selection
}) => {
  
  return (
    <Form className="filter-form">
    <InputGroup className="mb-3">
      <DropdownButton
        variant="outline-secondary"
        title={selection.label}
        id="input-group-dropdown-1"
      >
        { filterOptions.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => setSelection(option)}>{option.label}</Dropdown.Item>
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