export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: String!
        author:Author!
        reviews:[Review!]
    }
    type Author {
        id: ID!
        name: String!
        verified: String!
        reviews:[Review!]
        games:[Game!]
    }
    type Review {
        id: ID!
        content: String!
        rating: Int!
        author:Author!
        game:Game!
    }
    type Query {
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
        reviews: [Review]
        review(id: ID!): Review
    }
    type Mutation {
        createGame(game: AddGameInput!): Game
        createAuthor(author: AddAuthorInput!): Author
        createReview(review: AddReviewInput!): Review
    }
    input AddGameInput{
        title: String!
        platform: String!
    }
    input AddAuthorInput{
        name: String!
        verified: String!
    }
    input AddReviewInput{
        content: String!
        rating: Int!
        author_id: ID!
        game_id: ID!
    }
`