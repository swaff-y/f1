import { FC } from "react";
import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { FilterResults } from "../../../components/FilterResults/FilterResults";
import { useMeetingFilter } from "../../../hooks/useMeetingFilter";
import { useNavigate } from "react-router-dom";
import { Meeting } from "../../../models/Meeting";

export const MeetingFilterResults: FC = () => {
  const { meetings, isSuccess, filterOptions } = useMeetingFilter();
  const navigate = useNavigate();

  const handleClick = ({ data }: { data: Meeting }) => {
    const meeting_key = data.meeting_key;
    if(meeting_key) {
      navigate(`/home/meetings?meeting_key=${meeting_key}`);
    }
  };
  
  return (
    <>
      {isSuccess &&
        <SectionContainer>
          <FilterResults 
            data={meetings}
            filterOptions={filterOptions}
            handleClick={handleClick}
          />
        </SectionContainer>
      }
    </>
  );
};