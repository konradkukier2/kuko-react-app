import awsExports from './aws-exports';

export const awsConfig = {
  ...awsExports,
  aws_appsync_graphqlEndpoint: awsExports.aws_appsync_graphqlEndpoint,
};
