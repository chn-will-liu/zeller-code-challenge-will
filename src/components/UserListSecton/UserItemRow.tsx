import styled from "styled-components";
import { User } from "../../dtos/user.model";
import UserAvatar, { UserAvatarSkeleton } from "./UserAvatar";
import Skeleton from "../Skeleton/Skeleton";

const StyledUserItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-block: 36px;
`;

const UserName = styled.p`
  font-size: 18px;
  margin: 0 0 4px 0;
`;

const UserRoleType = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
`;

function UserItemRow(props: { user: User }) {
  return (
    <StyledUserItemRow data-testid="userItem">
      <UserAvatar user={props.user} />
      <div>
        <UserName>{props.user.name}</UserName>
        <UserRoleType className="user-role" data-testid="userItem.roleType">
          {props.user.role === "ADMIN" ? "Admin" : "Manager"}
        </UserRoleType>
      </div>
    </StyledUserItemRow>
  );
}

const UserNameSkeleton = styled(Skeleton)`
  width: 200px;
  height: 24px;
  margin-bottom: 4px;
`;

export function UserItemRowSkeleton() {
  return (
    <StyledUserItemRow>
      <UserAvatarSkeleton />
      <div>
        <UserNameSkeleton />
        <Skeleton width="100px" height="16px" />
      </div>
    </StyledUserItemRow>
  );
}

export default UserItemRow;
