
export const schema = `#graphql
type anime {
    nodeId: ID!
    id: BigInt!
    title: String
    en_title: String!
    jp_title: String
    es_title: String
    description: String
    en_desc: String
    jp_desc: String
    es_desc: String
    format: format
    episodes: Float
    episode_duration: Float
    status: status
    start_date: Date
    end_date: Date
    season: season
    source: source
    hashtag: String
    synonyms: [String]
    characters: [BigInt]
}
`