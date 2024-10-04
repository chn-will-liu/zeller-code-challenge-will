import styled from "styled-components";
import { StyledSection, SectionHeaderSkeleton } from "../Section/Section";
import Skeleton from "../Skeleton/Skeleton";

const InputSelectorSkeleton = styled(Skeleton)`
  height: 40px;
  margin-bottom: 12px;
`;

function UserTypeSelectorSectionSkeleton() {
  return (
    <StyledSection data-testid="userTypeSelector.skeleton">
      <SectionHeaderSkeleton />
      <div>
        <InputSelectorSkeleton />
        <InputSelectorSkeleton />
      </div>
    </StyledSection>
  );
}

export default UserTypeSelectorSectionSkeleton;
