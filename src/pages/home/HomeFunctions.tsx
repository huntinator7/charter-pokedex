import { useReducer } from "react"

interface State {
    types: { [key: string]: boolean }
    weaknesses: { [key: string]: boolean }
}

type Action =
    | { type: "toggle"; category: "types" | "weaknesses"; name: string }
    | {
          type: "set"
          category: "types" | "weaknesses"
          name: string
          state: boolean
      }
    | {
          type: "setAll"
          category: "types" | "weaknesses"
          state: boolean
      }

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "toggle":
            return {
                ...state,
                [action.category]: {
                    ...state[action.category],
                    [action.name]: !state[action.category][action.name],
                },
            }
        case "set":
            return {
                ...state,
                [action.category]: {
                    ...state[action.category],
                    [action.name]: action.state,
                },
            }
        case "setAll":
            return {
                ...state,
                [action.category]: Object.fromEntries(
                    Object.keys(state[action.category]).map((k) => [
                        k,
                        action.state,
                    ])
                ),
            }
        default:
            return state
    }
}

interface Response {
    types: { [key: string]: boolean }
    weaknesses: { [key: string]: boolean }
    typesEnabled: string[]
    weaknessesEnabled: string[]
    toggle: (category: "types" | "weaknesses", name: string) => void
    set: (
        category: "types" | "weaknesses",
        name: string,
        state: boolean
    ) => void
    setAll: (category: "types" | "weaknesses", state: boolean) => void
}

function useFilterReducer(initialState: State): Response {
    const [state, dispatch] = useReducer(reducer, initialState)
    return {
        types: state.types,
        weaknesses: state.weaknesses,
        typesEnabled: Object.entries(state.types)
            .filter(([_k, v]) => v)
            .map(([k]) => k),
        weaknessesEnabled: Object.entries(state.weaknesses)
            .filter(([_k, v]) => v)
            .map(([k]) => k),
        toggle: (category, name) =>
            dispatch({ type: "toggle", category, name }),
        set: (category, name, state) =>
            dispatch({ type: "set", category, name, state }),
        setAll: (category, state) =>
            dispatch({ type: "setAll", category, state }),
    }
}

export default {
    useFilterReducer,
}
