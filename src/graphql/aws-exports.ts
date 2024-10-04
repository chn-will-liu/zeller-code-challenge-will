const awsconfig = {
  aws_appsync_graphqlEndpoint:
    "https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql",
  aws_appsync_region: "ap-southeast-2",
  aws_appsync_authenticationType: "API_KEY",
  // aws_appsync_apiKey: "da2-xxxxxxxxxxxxxxxxxxxxxxxxx",
  aws_appsync_apiKey: ((): string => {
    alert("Please provide an API key");
    throw new Error("Please provide an API key");
  })(),
} as const;

export default awsconfig;
