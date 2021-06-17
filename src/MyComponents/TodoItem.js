import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <h6> {props.item.tittle} </h6>
            <p> { props.item.des } </p>
            
            <button className="btn btn-sm btn-danger" onClick={()=>{ props.OnDelete(props.item) }} > delete </button>
        </div>
    )
}
