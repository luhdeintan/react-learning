import { useReducer } from "react";

/**
   * 1. state: value like variabel on useState()
   *  1a. update data still call this, not only 'initialState'
   * 2. dispatch: like function to update data on useState()
   *  2a. call function on render (reducer just on process)
   * 3. reducer: custom state logic
   *  3a. use this for logic code
   * 4. initialState: initial value ex: useState(0)
   */

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
    </>
  );
}

const initialState = {count: 0}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    case "reset":
      return {
        count: 0
      }
    default:
      return state
  }
}

export default App;
