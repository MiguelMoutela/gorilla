export default `
  type Post {
    _id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }

  type Query {
    getPost(_id: ID!): Post!
    getAllPosts: [Post!]!
  }

  type Mutation {
    createPost(title: String!, body: String!, published: Boolean!, author: ID!): Post!
    deletePost(_id: ID!): Post
  }

  type Subscription {
    post: PostSubscriptionPayload!
  }

  type PostSubscriptionPayload {
    post: Post!
  }
`;
