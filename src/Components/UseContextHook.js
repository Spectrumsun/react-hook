
import React, { useContext } from 'react';
import { UserNameContext } from './../App';


const UseContextHook = () => {
 const userName = useContext(UserNameContext);
  return (
      <div>
        <h1>My name is {userName}</h1>
      </div>
    )
}

export default UseContextHook;