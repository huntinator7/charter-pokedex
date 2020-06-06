import ApolloClient, { InMemoryCache } from "apollo-boost"
import { typeDefs, resolvers } from "./store"

export const client = new ApolloClient({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cache: new InMemoryCache({
        dataIdFromObject: (o: any) => o.num,
    }),
})

fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
).then((r) => {
    r.json().then((s) => {
        const u = s.pokemon.map((t: any) => ({
            ...t,
            __typename: "Pokemon",
            candy_count: t.candy_count ?? null,
            next_evolution:
                t.next_evolution?.map((v: any) => ({
                    ...v,
                    __typename: "Evolution",
                })) ?? null,
            prev_evolution:
                t.prev_evolution?.map((v: any) => ({
                    ...v,
                    __typename: "Evolution",
                })) ?? null,
        }))
        client.writeData({
            data: { pokemon: u },
        })
    })
})
