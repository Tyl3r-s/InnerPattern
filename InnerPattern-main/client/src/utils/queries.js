import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      entries
    }
  }
`;

export const QUERY_ENTRIES = gql`
  query entries($username: String) {
    entries(username: $username) {
      _id
      title
      entryText
      createdAt
      moodRating
    }
  }
`;