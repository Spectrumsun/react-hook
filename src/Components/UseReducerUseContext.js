import React, { useContext } from 'react';
import { countContext } from '../App';


const UseReducerUseContext = () => {
  const countContexts = useContext(countContext)

  return (
      <div>
      <h4> Count is {countContexts.countState} </h4>
        <button onClick={()=> countContexts.countDispatch({ type: 'INCREMENT_COUNT', value: 1 }) }>
          Increment
        </button>
        <button onClick={()=> countContexts.countDispatch({ type: 'DECREMENT_COUNT', value: 1 }) }>
          Decrement
        </button>
        <button onClick={()=> countContexts.countDispatch({ type: 'RESET_COUNT', value: 0 }) }>
          Reset
        </button>

      </div>
    )
}

export default UseReducerUseContext;



;