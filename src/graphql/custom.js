export const getTenantWithLicensesAndJobs = /* GraphQL */ `
  query getTenantWithLicensesAndJobs(
    $id: ID!
    $limit: Int
    ) {
      getTenant(id: $id) {
        id
        type
        name
        email_domains
        jobs {
          items {
            id
            job {
              id
              name
            }
          }
        }
        licenses(limit: $limit) {
          items {
            id
            identity_sub
            validTo
          }
        }
      }
  }
`;

export const getClientConfiguration = /* GraphQL */ `
    query GetClientConfiguration(
        $id: ID!
    ) {
        getClientConfiguration(id: $id) {
            minimum_version
        }
    }
`;

export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;