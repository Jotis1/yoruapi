import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";

import { typeDefs } from "../types/schemas";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT || 4000) },
});
