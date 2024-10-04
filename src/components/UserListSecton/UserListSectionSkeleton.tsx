import { SectionHeaderSkeleton, StyledSection } from "../Section/Section";

import { UserItemRowSkeleton } from "./UserItemRow";

function UserListSectionSkeleton() {
  return (
    <StyledSection data-testid="userListSection.skeleton">
      <SectionHeaderSkeleton />
      <UserItemRowSkeleton />
      <UserItemRowSkeleton />
      <UserItemRowSkeleton />
    </StyledSection>
  );
}

export default UserListSectionSkeleton;
