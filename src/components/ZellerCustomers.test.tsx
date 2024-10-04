import { render, screen, within } from "@testing-library/react";
import { User } from "../dtos/user.model";
import ZellerCustomers, { ZellerCustomersSekelton } from "./ZellerCustomers";
import userEvent from "@testing-library/user-event";

const mockUsers: User[] = [
  {
    id: "1",
    name: "John",
    email: "a@b.com",
    role: "ADMIN",
  },
  {
    id: "2",
    name: "Jane",
    email: "a@b.com",
    role: "ADMIN",
  },
  {
    id: "31",
    name: "Doe",
    email: "a@b.com",
    role: "MANAGER",
  },
];

describe("ZellerCustomer", () => {
  it("renders ADMIN users by default", () => {
    render(<ZellerCustomers users={mockUsers} />);

    const userRoleElement = screen.getByRole("radio", {
      name: /ADMIN/i,
      checked: true,
    });
    expect(userRoleElement).toBeInTheDocument();

    const userItems = screen.getAllByTestId("userItem");
    userItems.every((item) =>
      expect(within(item).getByTestId("userItem.roleType")).toHaveTextContent(
        /ADMIN/i
      )
    );
  });

  it("Switches to MANAGER users when MANAGER radio is selected", async () => {
    render(<ZellerCustomers users={mockUsers} />);

    const user = userEvent.setup();
    const managerRadioElement = screen.getByRole("radio", {
      name: /MANAGER/i,
    });

    await user.click(managerRadioElement);

    const userItems = screen.getAllByTestId("userItem");
    expect(userItems).toHaveLength(1);
    userItems.every((item) =>
      expect(within(item).getByTestId("userItem.roleType")).toHaveTextContent(
        /MANAGER/i
      )
    );
  });
});

describe("ZellerCustomersSkeleton", () => {
  it("renders skeleton successfully", () => {
    render(<ZellerCustomersSekelton />);

    const userTypeSelectorSkeleton = screen.getByTestId(
      "userTypeSelector.skeleton"
    );
    expect(userTypeSelectorSkeleton).toBeInTheDocument();

    const userListSectionSkeleton = screen.getByTestId(
      "userListSection.skeleton"
    );
    expect(userListSectionSkeleton).toBeInTheDocument();
  });
});
