import React from "react"
import { Router } from "@reach/router"
import Home from "./pages/home/Home"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./apollo/client"

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Home default />
            </Router>
        </ApolloProvider>
    )
}

export default App
