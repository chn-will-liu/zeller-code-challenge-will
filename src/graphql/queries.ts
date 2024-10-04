import { gql } from "@apollo/client";
import { User } from "../dtos/user.model";

export const ListZellerCustomers = gql`
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
      }
    }
  }
`;

export type ListZellerCustomersResult = {
  listZellerCustomers: { items: User[] };
};
