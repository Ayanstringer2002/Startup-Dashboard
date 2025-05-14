// server/index.js
const express = require('express');
const { ApolloServer } = require('@apollo/server-express');
const cors = require('cors');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
