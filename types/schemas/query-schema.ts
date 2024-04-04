
export const schema = `#graphql
type Query {
    anime(title: String, english_title: String, native_title: String, spanish_title: String, id: Int) : [anime]
    character(name: String, jp_name: String, id: Int) : [character]
}
`;