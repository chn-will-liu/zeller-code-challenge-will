import styled from "styled-components";
import { User } from "../../dtos/user.model";
import Skeleton from "../Skeleton/Skeleton";

const StyledUserAvatar = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #0370ce;
  background-color: #e8f2fb;
`;
function UserAvatar(props: { user: User }) {
  return (
    <StyledUserAvatar>
      {props.user.name[0]?.toLocaleUpperCase()}
    </StyledUserAvatar>
  );
}

export function UserAvatarSkeleton() {
  return <Skeleton width="56px" height="56px" />;
}
export default UserAvatar;
