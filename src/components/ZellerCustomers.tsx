import styled from "styled-components";
import UserListSection from "./UserListSecton/UserListSection";
import UserTypeSelectorSection from "./UserTypeSelector/UserTypeSelectorSection";

import { useMemo, useState } from "react";
import { User, UserRole } from "../dtos/user.model";
import UserTypeSelectorSectionSkeleton from "./UserTypeSelector/UserTypeSelectorSkelecton";
import UserListSectionSkeleton from "./UserListSecton/UserListSectionSkeleton";

const StyledContainer = styled.div`
  max-width: 600px;
  margin-inline: auto;
  margin-top: 24px;
`;

export type ZellerCustomersProps = {
  users: User[];
};

function ZellerCustomers({ users }: ZellerCustomersProps) {
  const [roleType, setRoleType] = useState<UserRole>("ADMIN");
  const adminUsers = useMemo(
    () => users.filter((user) => user.role === "ADMIN"),
    [users]
  );
  const managerUsers = useMemo(
    () => users.filter((user) => user.role === "MANAGER"),
    [users]
  );

  return (
    <StyledContainer>
      <UserTypeSelectorSection
        roleType={roleType}
        onRoleTypeChange={setRoleType}
      />
      <UserListSection
        roleType={roleType}
        users={roleType === "ADMIN" ? adminUsers : managerUsers}
      />
    </StyledContainer>
  );
}

export default ZellerCustomers;

export function ZellerCustomersSekelton() {
  return (
    <StyledContainer>
      <UserTypeSelectorSectionSkeleton />
      <UserListSectionSkeleton />
    </StyledContainer>
  );
}
