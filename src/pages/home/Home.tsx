import React, { useEffect, useState } from "react"
import { RouteComponentProps, useNavigate } from "@reach/router"
import { useQuery } from "@apollo/react-hooks"
import { GET_ALL_POKEMON } from "../../apollo/queries"
import { Header } from "../../components"
import C from "./HomeComponents"
import F from "./HomeFunctions"

const Home = (props: RouteComponentProps) => {
    const { data, loading, error } = useQuery(GET_ALL_POKEMON)

    const {
        types,
        weaknesses,
        typesEnabled,
        weaknessesEnabled,
        toggle,
        setAll,
    } = F.useFilterReducer({
        types: Object.fromEntries(
            Object.keys(typeToBgColor).map((k) => [k, false])
        ),
        weaknesses: Object.fromEntries(
            Object.keys(typeToBgColor).map((k) => [k, false])
        ),
    })

    const [search, setSearch] = useState("")

    const [modalOpen, setModalOpen] = useState(false)

    const navigate = useNavigate()

    const filterList = (p: any): boolean => {
        // if search not empty and search not found in name, fail
        if (search && !p.name.toLowerCase().includes(search.toLowerCase())) {
            return false
        }
        // if some types enabled but not all found, fail
        if (
            typesEnabled.length > 0 &&
            !typesEnabled.reduce((a, c) => a && p.type?.includes(c), true)
        ) {
            return false
        }
        // if some weaknesses enabled but not all found, fail
        if (
            weaknessesEnabled.length > 0 &&
            !weaknessesEnabled.reduce(
                (a, c) => a && p.weaknesses?.includes(c),
                true
            )
        ) {
            return false
        }
        return true
    }

    useEffect(() => {
        console.log(data, loading, error)
    }, [data, loading, error])

    useEffect(() => {
        console.log(typesEnabled, weaknessesEnabled)
    }, [typesEnabled, weaknessesEnabled])

    return (
        <div>
            <Header>
                <div id="headerCircle" />
                <h1>Pokedex!</h1>
            </Header>
            <C.PokemonList>
                {data?.pokemon
                    ?.filter((p: any) => filterList(p))
                    ?.map((p: any) => {
                        return (
                            <li
                                id={p.num}
                                key={p.num}
                                onClick={() => {
                                    console.log("clicked")
                                    navigate(`/pokemon/${p.num}`)
                                }}
                            >
                                <div>
                                    <img
                                        className="pkImg"
                                        src={p.img}
                                        alt={p.name}
                                    />
                                    <span className="pkNum">Num.{p.num}</span>
                                </div>
                                <div>
                                    <span className="pkName">
                                        {p.name}
                                        <>
                                            {p.type.map((t: any) => (
                                                <span
                                                    className="pkType"
                                                    style={{
                                                        backgroundColor:
                                                            typeToBgColor[t] ??
                                                            "black",
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </>
                                    </span>
                                    <div className="pkHP">
                                        <span>HP</span>
                                    </div>
                                    <span className="pkHealth">300 / 300</span>
                                    <div className="pkWeaknesses">
                                        <span className="pkWeakTitle">
                                            WEAK TO
                                        </span>
                                        {p.weaknesses?.map((w: any) => (
                                            <span
                                                style={{
                                                    backgroundColor:
                                                        typeToBgColor[w] ??
                                                        "black",
                                                }}
                                            >
                                                {w}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
            </C.PokemonList>
            <C.SearchBar>
                <input
                    placeholder="Find a Pokemon..."
                    value={search}
                    onChange={(e) => {
                        window.scrollTo(0, 0)
                        setSearch(e.target.value)
                    }}
                />
                <button onClick={() => setModalOpen(!modalOpen)}>
                    FILTERS
                </button>
                <button
                    onClick={() => {
                        setSearch("")
                        setAll("types", false)
                        setAll("weaknesses", false)
                    }}
                >
                    CLEAR
                </button>
            </C.SearchBar>
            <C.Modal style={{ display: modalOpen ? "block" : "none" }}>
                <C.ModalInside>
                    <ul>
                        <li className="modalTitle">Types</li>
                        <li>
                            <button onClick={() => setAll("types", false)}>
                                Clear
                            </button>
                        </li>
                        {Object.entries(types).map(([k, v]) => (
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={v}
                                        onChange={() => toggle("types", k)}
                                    />
                                    <span>{k}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li className="modalTitle">Weaknesses</li>
                        <li>
                            <button onClick={() => setAll("weaknesses", false)}>
                                Clear
                            </button>
                        </li>
                        {Object.entries(weaknesses).map(([k, v]) => (
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={v}
                                        onChange={() => toggle("weaknesses", k)}
                                    />
                                    <span>{k}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </C.ModalInside>
            </C.Modal>
        </div>
    )
}

export default Home

const typeToBgColor: { [key: string]: string } = {
    Normal: "#a8a878",
    Grass: "#78c850",
    Poison: "#a040a0",
    Fire: "#f08030",
    Water: "#6890f0",
    Electric: "#f8d030",
    Ice: "#98d8d8",
    Ground: "#e0c068",
    Flying: "#a890f0",
    Fighting: "#c03028",
    Psychic: "#f85888",
    Dark: "#705848",
    Rock: "#b8a038",
    Bug: "#a8b820",
    Ghost: "#705898",
    Steel: "#b8b8d0",
    Dragon: "#7038f8",
    Fairy: "#ffaec9",
}
