import React, { useState } from 'react';
import HookCountSix from './HookCountSix';

const MouseContainer = () => {
  const [display, setDisplay ] = useState(true)
  return (
      <div>
      <button 
        onClick={()=> setDisplay(!display) }>
          Toggle Display
        </button>
        {display && <HookCountSix />}
      </div>
    )
}

export default MouseContainer;



;