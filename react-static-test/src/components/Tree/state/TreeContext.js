import React from "react"

const defaultValue = {
  dispatch: null,
  state: null,
  isImparative: null,
  onNodeClick: () => {}
}

export const TreeContext = React.createContext(defaultValue)

export const useTreeContext = () => React.useContext(TreeContext)
