import React from 'react'
import { todos } from '../../type/type'

type Props={
todosArr:todos[],
setTodos: React.Dispatch<React.SetStateAction<todos[]>>
deleteMessage:(id:number)=>void
}
const Message:React.FC<Props> = ({todosArr,deleteMessage}) => {
  return (
    <div>
         <ul>
        {
            todosArr.map((todo,i)=>(
                <li key={i}>{todo.id + " " + todo.text} <button onClick={()=>deleteMessage(todo.id)}>del</button></li>
            ))
        } 
        </ul>
    </div>
  )
}

export default Message