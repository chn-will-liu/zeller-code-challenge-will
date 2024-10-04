import styled from "styled-components";
import { StyledSection, StyledSectionHeader } from "../Section/Section";
import { ChangeEvent, useCallback } from "react";
import { UserRole } from "../../dtos/user.model";

const StyledRadioInputLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  padding: 12px;
  cursor: pointer;
  border-radius: 4px;

  &:hover,
  &:has(input:checked) {
    background-color: #e8f2fb;
  }

  &:active {
    background-color: #d3e4f3;
  }

  input[type="radio"] {
    margin-right: 8px;
  }
`;

export type UserTypeSelectorSectionProps = {
  roleType: UserRole;
  onRoleTypeChange: (role: UserRole) => void;
};

function UserTypeSelectorSection({
  roleType,
  onRoleTypeChange,
}: UserTypeSelectorSectionProps) {
  const changeHandler = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      onRoleTypeChange(ev.target.value as UserRole);
    },
    [onRoleTypeChange]
  );

  return (
    <StyledSection>
      <StyledSectionHeader>User Types</StyledSectionHeader>
      <div>
        <StyledRadioInputLabel>
          <input
            type="radio"
            name="userRoleType"
            value="ADMIN"
            checked={roleType === "ADMIN"}
            onChange={changeHandler}
          />
          <span>Admin</span>
        </StyledRadioInputLabel>
        <StyledRadioInputLabel>
          <input
            type="radio"
            name="userRoleType"
            value="MANAGER"
            checked={roleType === "MANAGER"}
            onChange={changeHandler}
          />
          <span>Manager</span>
        </StyledRadioInputLabel>
      </div>
    </StyledSection>
  );
}

export default UserTypeSelectorSection;
