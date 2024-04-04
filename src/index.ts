import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "../types/schemas";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
});

await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT || 4000) },
});
