import React from 'react'
import { useDispatch } from 'react-redux'
import { check_Post, delete_Post } from '../Redux/actions/Post'
import Edit from "./Edit"

const Post = ({post}) => {
    const dispatch = useDispatch("");
    const styles= post.done? {textDecoration:"line-through"}: {};
    return (
        <div>
           <h1 className={post.done? "done": "undone"} style={styles}>{post.title}</h1>
          <Edit post={post}/>
           <button onClick={()=>dispatch(delete_Post(post.id))}>Delete</button>
           <button onClick={()=>dispatch(check_Post(post.id))}>{post.done? "undone" : "done"}</button>
        </div>
    )
}

export default Post
