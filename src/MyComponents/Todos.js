import React from 'react'
import TodoItem from './TodoItem'

export const Todos = ({ arr, OnDelete }) => {
    return (
        <div>
            Todos works !

            {arr.length===0 ? " empty list " :
                arr.map((item) => {
                    return (
                        <TodoItem item={item} key={item.sno} OnDelete={OnDelete} />
                    )
                }
                )
            }

        </div>
    )
}
