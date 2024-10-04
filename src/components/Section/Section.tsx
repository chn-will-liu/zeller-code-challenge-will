import styled from "styled-components";
import Skeleton from "../Skeleton/Skeleton";

export const StyledSection = styled.section`
  border-block: 1px solid #ccc;
  padding-block: 24px;

  & + & {
    border-block-start: 0;
  }
`;

export const StyledSectionHeader = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
`;

export function SectionHeaderSkeleton() {
  return (
    <StyledSectionHeader>
      <Skeleton height="32px" width="40%" />
    </StyledSectionHeader>
  );
}
