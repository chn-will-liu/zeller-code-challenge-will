import { QueryResult, useQuery } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@apollo/client");
jest.mock("./components/ZellerCustomers", () => {
  return {
    __esModule: true,
    default: () => <div>Mocked ZellerCustomer</div>,
    ZellerCustomersSekelton: () => <div>Mocked Skeleton</div>,
  };
});

const mockUseQuery = jest.mocked(useQuery);

describe("App", () => {
  it("renders loading when userQuery is fetching data", () => {
    mockUseQuery.mockReturnValue({
      loading: true,
      error: undefined,
      data: undefined,
    } as QueryResult);

    render(<App />);
    const loadingElement = screen.getByTestId("loadingContainer");
    expect(loadingElement).toBeInTheDocument();
  });

  it("renders error when userQuery returns error", () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: new Error(),
      data: undefined,
    } as QueryResult);

    render(<App />);
    const errorElement = screen.getByTestId("errorContainer");
    expect(errorElement).toBeInTheDocument();
  });

  it("renders Zeller Customers component when data is fetched", () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: { listZellerCustomers: { items: [] } },
    } as QueryResult);

    render(<App />);
    const errorElement = screen.getByText(/Mocked ZellerCustomer/i);
    expect(errorElement).toBeInTheDocument();
  });
});
