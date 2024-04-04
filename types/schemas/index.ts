import { mergeTypeDefs } from "@graphql-tools/merge"
import { schema as anime } from "./anime-schema";
import { schema as query } from "./query-schema";
import { schema as scalars } from "./scalars-schema";
import { schema as enums } from "./enums-schema";
import { schema as character } from "./character-schema";

export const typeDefs = mergeTypeDefs([
    scalars,
    anime,
    character,
    enums,
    query
]);