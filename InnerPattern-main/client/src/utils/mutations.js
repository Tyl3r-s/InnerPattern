import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ENTRY = gql`
  mutation addEntry($title: String!, $entryText: String!, $moodRating: String!, $email: String!) {
    addEntry(title: $title, entryText: $entryText, moodRating: $moodRating, email: $email) {
      _id
    }
  }
`;