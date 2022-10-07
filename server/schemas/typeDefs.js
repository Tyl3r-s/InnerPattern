const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  entries: [Entry]
}

type Entry {
  _id: ID
  title: String
  entryText: String
  moodRating: String
  email: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addEntry(title: String!, entryText: String!, moodRating: String!, email: String!): Entry
    editEntry(_id: ID!, title: String!, entryText: String!, moodRating: String!, email: String!): Entry
  }
`;

module.exports = typeDefs;
