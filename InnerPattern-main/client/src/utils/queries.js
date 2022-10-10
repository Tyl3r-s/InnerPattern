import gql from 'graphql-tag';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ENTRIES = gql`
query entries ($email: String!) {
  entries (email: $email) {
    _id
    title
    entryText
    moodRating
  }
}
`;