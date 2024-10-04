import { User, UserRole } from "../../dtos/user.model";
import { StyledSection, StyledSectionHeader } from "../Section/Section";
import UserItemRow from "./UserItemRow";

export type UserListSectionProps = {
  roleType: UserRole;
  users: User[];
};

function UserListSection({ roleType, users }: UserListSectionProps) {
  return (
    <StyledSection>
      <StyledSectionHeader>
        {roleType === "ADMIN" ? "Admin Users" : "Manager Users"}
      </StyledSectionHeader>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserItemRow user={user} />
          </li>
        ))}
      </ul>
    </StyledSection>
  );
}

export default UserListSection;
