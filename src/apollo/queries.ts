import { gql } from "apollo-boost"

export const GET_ALL_POKEMON = gql`
    query GetAllPokemon {
        pokemon {
            id
            num
            name
        }
    }
`
