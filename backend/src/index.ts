import express from "express";
import { ApolloServer } from "apollo-server-express";
import { prisma } from "./infra/documentDB";

const app = express();
const PORT = 3000;

const server = new ApolloServer({
  resolvers,
  context: ({ req }) => ({
    ...req,
    prisma,
  }),
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(
      `GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
