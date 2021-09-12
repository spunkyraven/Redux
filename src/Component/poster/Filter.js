import React from 'react'

const Filter = ({abc}) => {
    return (
        <div>
            <button onClick={()=>abc("all")}> all </button>
            <button onClick={()=>abc("done")}>done</button>
            <button onClick={()=>abc("undone")}>undone</button>
        </div>
    )
}

export default Filter
