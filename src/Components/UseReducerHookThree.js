import React, { useReducer } from 'react';

const initialState =  {
  counter: 0,
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.value }
    case 'decrement':
      return { ...state, counter: state.counter - action.value }
      case 'reset':
      return initialState;
    default:
      return state;
  }
}

const UseReducerHookThree = () => {
  const [count, dispatch ] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
      <div>

        {count.counter}

        <button onClick={()=> dispatch({ type: 'increment', value: 1 }) }>
          Increment
        </button>

        <button onClick={()=> dispatch({ type: 'decrement', value: 1 }) }>
          Decrement
        </button>

        {count2.counter}

        <button onClick={()=> dispatch2({ type: 'increment', value: 10}) }>
          Increment2
        </button>

        <button onClick={()=> dispatch2({ type: 'decrement', value: 10 }) }>
          Decrement2
        </button>

        <button onClick={()=> dispatch({ type: 'reset', value: 0 }) }>
          Reset
        </button>

      </div>
    )
}

export default UseReducerHookThree;



;