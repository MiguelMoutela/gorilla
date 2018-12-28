export default `
  type User {
    _id: String!
    email: String!
    posts: [Post!]!
  }

  type Query {
    getUser(_id: ID!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    signUpUser(email: String!, password: String!): Auth
    signInUser(email: String!, password: String!): Auth
  }
`;
