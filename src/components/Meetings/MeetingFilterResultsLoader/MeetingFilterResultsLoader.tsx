import { FC } from "react"
import { SectionContainer } from "../../SectionContainer/SectionContainer";
import { FilterResultsLoader } from "../../FilterResultsLoader/FilterResultsLoader";
import { useMeetingFilter } from "../useMeetingFilter";

export const MeetingFilterResultsLoader: FC = () => {
  const { isLoading, filterOptions  } = useMeetingFilter();
  return (
    <>
      { isLoading &&
        <SectionContainer>
          <FilterResultsLoader 
            filterOptions={filterOptions}
          />
        </SectionContainer>
      }
    </>
  );
};