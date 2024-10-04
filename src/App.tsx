import { useQuery } from "@apollo/client";

import {
  ListZellerCustomers,
  ListZellerCustomersResult,
} from "./graphql/queries";
import ZellerCustomers, {
  ZellerCustomersSekelton,
} from "./components/ZellerCustomers";

function App() {
  const { loading, error, data } =
    useQuery<ListZellerCustomersResult>(ListZellerCustomers);

  if (loading)
    return (
      <div data-testid="loadingContainer">
        <ZellerCustomersSekelton />
      </div>
    );

  if (error || !data)
    return (
      <div data-testid="errorContainer">
        <p>An error occured while loading the data</p>
      </div>
    );

  return (
    <div>
      <ZellerCustomers users={data.listZellerCustomers.items} />
    </div>
  );
}

export default App;
