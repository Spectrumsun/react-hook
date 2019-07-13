import React, { useReducer } from 'react';
import ClassCount from './Components/ClassCount'
import HookCount from './Components/HookCount'
import HookCountTwo from './Components/HookCountTwo'
import HookCountThree from './Components/HookCountThree'
import HookCountFour from './Components/HookCountFour';
import HookCountFive from './Components/HookCountFive';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import UseContextHook from './Components/UseContextHook';
import UseReducerHook from './Components/UseReducerHook';
import UseReducerHookTwo from './Components/UseReducerHookTwo'
import UseReducerHookThree from './Components/UseReducerHookThree';
import UseReducerUseContext from './Components/UseReducerUseContext';

import './App.css';

export const UserNameContext = React.createContext();
export const countContext = React.createContext();

const initialState =  {
  counter: 0,
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, counter: state.counter + action.value }
    case 'DECREMENT_COUNT':
      return { ...state, counter: state.counter - action.value }
      case 'RESET_COUNT':
      return initialState;
    default:
      return state;
  }
}



function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="">
      <h4>
        Learn React-hook
      </h4>
      <ClassCount />
      <HookCount />
      <HookCountTwo />
      <br/>
      <HookCountThree />
      <HookCountFour />
      <h2>Use Effect</h2>
      <HookCountFive/>
      <MouseContainer/>
      <IntervalHookCounter />
      <DataFetching />
      <UserNameContext.Provider value={'Tomato'}>
        <UseContextHook />
      </UserNameContext.Provider>
      <UseReducerHook />
      <UseReducerHookTwo />
      <UseReducerHookThree />
      <br/>
      <countContext.Provider
        value={{ countState: count.counter, countDispatch: dispatch }}>
        <UseReducerUseContext />
      </countContext.Provider>
    </div>
  );
}

export default App;
