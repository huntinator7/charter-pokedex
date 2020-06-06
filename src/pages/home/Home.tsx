import React, { useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import { GET_ALL_POKEMON } from "../../apollo/queries"

const Home = (props: RouteComponentProps) => {
    const { data, loading, error } = useQuery(GET_ALL_POKEMON, {
        fetchPolicy: "cache-only",
    })

    useEffect(() => {
        console.log(data, loading, error)
    }, [data, loading, error])

    return (
        <div>
            <S.header>hello</S.header>
            <S.pokemonlist>
                {data?.pokemon?.map((p: any) => (
                    <li>{p.num}</li>
                ))}
            </S.pokemonlist>
        </div>
    )
}

export default Home

const S = {
    header: styled.header`
        color: #bbb;
    `,
    pokemonlist: styled.ul`
        list-style: none;
        background-color: red;
        li {
            height: 200px;
            background: rgba(255, 255, 255, 0);
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(102, 255, 54, 0) 5%,
                rgba(61, 255, 0, 1) 5%,
                rgba(61, 255, 0, 1) 100%
            );
            border: 5px solid #6f6;
            width: 46vw;
            margin-bottom: 10px;
        }
        li::before,
        li::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            border-color: transparent;
            border-style: solid;
        }
        li:nth-child(even) {
            transform: translate(0px, -100px);
            position: absolute;
            right: 40px;
        }
        li:nth-child(odd) {
        }
    `,
}
