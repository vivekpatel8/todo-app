import React from 'react'
import { useState } from 'react';


export const  AddItem = ({Additem}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert(" title or description can't be blank ")
        }
        Additem(title, desc);
    }

    return (
<form className="my-3 mx-3" onSubmit={submit}>
    <div className="form-group">
    <label htmlFor="title">Todo Item</label>
    <input type="text" className="form-control" value={title} id="title" onChange={(e)=>{
        settitle(e.target.value)
    }} />
    </div>
    <div className="form-group">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" className="form-control" value={desc} id="desc" onChange={(e)=>{
        setdesc(e.target.value)
    }} />
    </div>
  <button type="submit" className="btn btn-success btn-sm" >Submit</button>
</form>
    )
}
