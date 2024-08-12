import { FC } from "react"
import { SectionContainer } from "../../../components/SectionContainer/SectionContainer";
import { FilterResultsLoader } from "../../../components/Loaders/FilterResultsLoader/FilterResultsLoader";
import { useMeetingFilter } from "../../../hooks/useMeetingFilter";

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