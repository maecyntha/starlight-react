import React, { useContext, useReducer } from 'react';

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

// =======================================================
// useReducer and UseContext
// =======================================================
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment' : 
			return state + 1
    case 'decrement' : 
			return state - 1
    case 'reset' : 
			return initialState
    default :
			return state
  }
}

const ContextReducer = () => {
	const [count, dispatch] = useReducer(reducer, initialState)
	
	return (
		<CountContext.Provider value={{ countState : count, countDispatch: dispatch}}>
      <p>Count - {count}</p>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CountContext.Provider>
	)
}

export default ContextReducer;