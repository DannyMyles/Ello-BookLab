import db from './_db.js'
export const resolvers = {
    Query: {
        games: () => db.games,
        game: (_, {id}) => db.games.find(game => game.id === id),
        authors: () => db.authors,
        author: (_, {id}) => db.authors.find(author => author.id === id),
        reviews: () => db.reviews,
        review: (_, {id}) => db.reviews.find(review => review.id === id),
    },
    Game: {
        author: (game) => db.authors.find(author => author.id === game.author_id),
        reviews: (game) => db.reviews.filter(review => review.game_id === game.id),
    },
    Author: {
        reviews: (author) => db.reviews.filter(review => review.author_id === author.id),
        games: (author) => db.games.filter(game => game.author_id === author.id),
    },
    Mutation: {
        createGame: (_, {game}) => {
            const newGame = {
                id: db.games.length + 1,
               ...game,
            }
             db.games.push(newGame)
            return newGame
        },
        createAuthor: (_, {author}) => {
            const newAuthor = {
                id: db.authors.length + 1,
               ...author,
            //    generate random id
            id: Math.floor(Math.random()*1000)
            }
            db.authors.push(newAuthor)
            return newAuthor
        },
        createReview: (_, {review}) => {
            const newReview = {
                id: db.reviews.length + 1,
               ...review,
            }
            db.reviews.push(newReview)
            return newReview
        }, 
    }
}