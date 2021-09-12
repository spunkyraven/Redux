import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_Post } from '../Redux/actions/Post'

const Addposts = () => {
    const [title, setTitle] = useState("");
     const dispatch = useDispatch();
    
     const handleAdd=(e)=>{e.preventDefault();
     dispatch(add_Post({title,id:Math.random()}));
      setTitle("");
    }
    return (
        <form>
            
          <input onChange={(e)=>setTitle(e.target.value)} value={title}/>
          <button onClick={handleAdd}>ADD POST</button>  
        </form>
    )
    }

export default Addposts

