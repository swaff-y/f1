import { FC, useState } from "react";
import { SectionContainer } from "../../SectionContainer/SectionContainer";
import { FilterForm } from "../../FilterForm/FilterForm";
import { useLocationParams } from "../../../hooks/useLocationParams";
import { useNavigate } from "react-router-dom";
import { Utils } from "../../../utils/Utils";

const SESSION_FILTER_OPTIONS = [
  {
    id: 'session_name',
    label: 'Session Name',
  },
  {
    id: 'session_key',
    label: 'Session Key',
  },
  {
    id: 'meeting_key',
    label: 'GP Key',
  },
  {
    id: 'country_name',
    label: 'Country Name',
  },
  {
    id: 'country_key',
    label: 'Country Key'
  },
  {
    id: 'circuit_short_name',
    label: 'Circuit Name',
  },
  {
    id: 'circuit_key',
    label: 'Circuit Key'
  }
];

export const SessionFilterForm: FC = () => {
  const navigate = useNavigate();
  const {
    filter,
    value
  } = useLocationParams();
  const [valueState, setValueState] = useState(value || '');
  const [selection, setSelection] = useState(
    Utils.getSelectionFromFilterOptions(filter, SESSION_FILTER_OPTIONS)
  );

  const onSubmit = () => {
    navigate(`/home/sessions?filter=${selection.id}&value=${valueState}`);
  };

  return (
    <SectionContainer>
      <FilterForm
        filterOptions={SESSION_FILTER_OPTIONS}
        setSelection={setSelection}
        setValue={setValueState}
        selection={selection}
        value={valueState || ''}
        onSubmit={onSubmit}
      />
    </SectionContainer>
  );
};