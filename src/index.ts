import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "../types/schemas";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT || 4000) },
});

console.log(`Server ready at ${url}`);