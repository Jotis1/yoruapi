
export const schema = `#graphql
type character {
    nodeId: ID!
    id: BigInt!
    name: String!
    jp_name: String
    en_about: String
    birthdate: Date
    es_about: String
    jp_about: String
    aka: [String]
    gender: gender
    images: [String]
    animes: [BigInt]
}
`