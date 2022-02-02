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