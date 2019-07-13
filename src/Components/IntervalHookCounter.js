import React, { useState, useEffect, useContext } from 'react';
import NumberContext from './../App';

const IntervalHookCounter = () => {
  const [count, setCount ] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1 )
  } 

  const value = useContext(NumberContext);

  useEffect(() => {

    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    }
  })

  return (
      <div><h3> {value} {count} </h3></div>
    )
}

export default IntervalHookCounter;



;