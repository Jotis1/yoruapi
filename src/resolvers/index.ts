import { DateResolver, JSONResolver, BigIntResolver } from "graphql-scalars";
import { resolver as anime } from "./anime-resolver";
import { resolver as character } from "./character-resolver";

export const resolvers = {
    BigInt: BigIntResolver,
    Date: DateResolver,
    JSON: JSONResolver,
    Query: {
        anime,
        character
    },
}