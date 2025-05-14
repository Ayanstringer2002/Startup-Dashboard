const { gql } = require('apollo-server-express');

module.exports = gql`
  type Startup {
    id: ID!
    name: String!
    category: String!
    description: String
    trendScore: Float
  }

  type Query {
    getStartups(category: String): [Startup]
  }
`;
