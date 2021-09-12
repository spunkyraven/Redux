import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import Filter from "./Filter"
const Postlist = () => {
    const [status, seStatus] = useState("all")
    
   const posts = useSelector(state => state.postReducers.posts)
   
   
   
    return (
        <div>
            <Filter abc={seStatus}/>
            {status=="all"
            ? posts.map((el)=><Post post={el} key={el.id}  /> )
            : status=="done"? posts.filter(el=>el.done==true).map((el)=><Post post={el} key={el.id}  /> )
            : posts.filter(el=>el.done==false).map((el)=><Post post={el} key={el.id}  /> )
    }
        </div>
    )
}

export default Postlist
