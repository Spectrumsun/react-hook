
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost ] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);



  const handleClick = () => {
    setIdFromButtonClick(id);
  }
   

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res => {
      setPost(res.data)
      console.log(res.data)
   })
  },[idFromButtonClick])

  return (
      <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      {post.title}
      <button onClick={handleClick}>Fetch Post</button>
       {/* {
         posts.map(post => <li key={posts.id}>{post.title}</li>)
       } */}
      </div>
    )
}

export default DataFetching;