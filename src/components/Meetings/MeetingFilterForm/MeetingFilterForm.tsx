import { FC, useState } from "react";
import { SectionContainer } from "../../SectionContainer/SectionContainer";
import { FilterForm } from "../../FilterForm/FilterForm";
import { useLocationParams } from "../../../hooks/useLocationParams";
import { useNavigate } from "react-router-dom";
import { Utils } from "../../../utils/Utils";

export const MEETING_FILTER_OPTIONS = [
  {
    id: 'year',
    label: 'Year',
  },
  {
    id: 'meeting_name',
    label: 'GP Name',
  },
  {
    id: 'meeting_key',
    label: 'GP Key',
  },
  {
    id: 'country_name',
    label: 'Country',
  },
  {
    id: 'country_key',
    label: 'Country Key'
  },
  {
    id: 'circuit_name',
    label: 'Circuit Name'
  },
  {
    id: 'circuit_key',
    label: 'Circuit Key'
  }
];

export const MeetingFilterForm: FC = () => {
  const navigate = useNavigate();
  const {
    filter,
    value
  } = useLocationParams();
  const [valueState, setValueState] = useState(value || '');
  const [selection, setSelection] = useState(
    Utils.getSelectionFromFilterOptions(filter, MEETING_FILTER_OPTIONS)
  );

  const onSubmit = () => {
    navigate(`?filter=${selection.id}&value=${valueState}`);
  };

  return (
    <SectionContainer>
      <FilterForm
        filterOptions={MEETING_FILTER_OPTIONS}
        setSelection={setSelection}
        setValue={setValueState}
        selection={selection}
        value={valueState || ''}
        onSubmit={onSubmit}
      />
    </SectionContainer>
  );
};