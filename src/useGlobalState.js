import React, { createContext, useReducer, useContext } from "react"

const StateContext = createContext(null)

export function Provider({ children, reducer, initialState }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export function useGlobalState() {
  return useContext(StateContext)
}