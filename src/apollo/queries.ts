import { gql } from "apollo-boost"

export const GET_ALL_POKEMON = gql`
    query GetAllPokemon {
        pokemon @client {
            id
            num
            name
            img
            type
            height
            weight
            candy
            candy_count
            egg
            spawn_chance
            avg_spawns
            spawn_time
            multipliers
            weaknesses
        }
    }
`
