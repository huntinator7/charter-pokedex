import React from "react"
import { Router } from "@reach/router"
import Home from "./pages/home/Home"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./apollo/client"
import Modal from "react-modal"
import Pokemon from "./pages/pokemon/Pokemon"

Modal.setAppElement("#root")

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Home default />
                <Pokemon path="pokemon/:id" />
            </Router>
        </ApolloProvider>
    )
}

export default App
