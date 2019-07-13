import React, { useState, useEffect } from 'react';

const HookCountSix = () => {
  const [x, setX ] = useState(0)
  const [y, setY ] = useState(0)

  const logMousePosition = e => {
    console.log( 'MOUSE MOVE')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
   console.log('use Effect called like component did mount');
   window.addEventListener('mousemove', logMousePosition)

   return () => {
     console.log('Component unmount')
     window.removeEventListener('mousemove', logMousePosition)
   }
  },[])

  return (
      <div>
        Hook X - {x} Y - {y}
      </div>
    )
}

export default HookCountSix;