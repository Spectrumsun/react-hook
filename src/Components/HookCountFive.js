import React, { useState, useEffect } from 'react';

const HookCountFive = () => {
  const initialCount = 0;
  const [count, setCount ] = useState(initialCount)
  const [name, setName ] = useState('')

  // useEffect(() => {
  //   document.title = 'You Click'+ count;
  // })

  useEffect(() => {
    console.log('I only update when the counter is changed')
    document.title = 'You Click'+ count;
  }, [count])

  return (
      <div>
      {count}
      <br />
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
     
      <button onClick={()=> setCount(prevCount  => prevCount + 1) }>Increment</button>
      </div>
    )
}

export default HookCountFive;



;