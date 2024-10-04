import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { AuthOptions, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import awsconfig from "./aws-exports";

export function createClient() {
  const url = awsconfig.aws_appsync_graphqlEndpoint;
  const region = awsconfig.aws_appsync_region;
  const auth: AuthOptions = {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
  };

  const httpLink = new HttpLink({ uri: url });

  const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
  ]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
