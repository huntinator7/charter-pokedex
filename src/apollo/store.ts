import { gql } from "apollo-boost"

export const typeDefs = gql`
    type Evolution {
        num: String!
        name: String!
    }
    type Pokemon {
        id: Int!
        num: String!
        name: String!
        img: String!
        type: [String!]!
        height: String!
        weight: String!
        candy: String!
        candy_count: Int
        egg: String!
        spawn_chance: Float!
        avg_spawns: Int!
        spawn_time: String!
        multipliers: [Float!]
        weaknesses: [String!]!
        prev_evolution: [Evolution!]
        next_evolution: [Evolution!]
    }
    type Query {
        pokemon: [Pokemon!]
    }
`

export const resolvers = {
    // Query: {
    //     Pokemon: (a: any, b: any, c: any, d: any) => {
    //         console.log(a, b, c, d)
    //         return {}
    //     },
    // },
}
