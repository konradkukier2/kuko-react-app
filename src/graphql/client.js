import { Auth } from 'aws-amplify';
import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { awsConfig } from '../aws.config';

const url = awsConfig.aws_appsync_graphqlEndpoint;
const region = awsConfig.aws_appsync_region;
const auth = {
  type: awsConfig.aws_appsync_authenticationType,
  jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
};
export const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
