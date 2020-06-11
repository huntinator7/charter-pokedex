import React from "react"
import { RouteComponentProps, useNavigate } from "@reach/router"
// import { GET_SINGLE_POKEMON } from "../../apollo/queries"
// import { useQuery } from "@apollo/react-hooks"
import { Header } from "../../components"

interface Props extends RouteComponentProps {}

const Pokemon = (props: any) => {
    // const { data, loading, error } = useQuery(GET_SINGLE_POKEMON, {
    //     variables: { id: "001" },
    // })

    const navigate = useNavigate()
    // useEffect(() => {
    //     console.log(data, loading, error)
    // }, [data, loading, error])

    return (
        <div>
            <Header>
                <div id="headerCircle" />
                <h1>Pokedex!</h1>
            </Header>
            <button
                style={{
                    marginTop: "150px",
                    fontSize: "3rem",
                }}
                onClick={() => {
                    navigate("/")
                }}
            >
                Back
            </button>
            {props.id}
        </div>
    )
}

export default Pokemon
