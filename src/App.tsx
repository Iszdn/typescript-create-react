import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Todo/input';
import { todos } from './type/type';
import Message from './components/Todo/message';
import Counter from './components/Counter';

const App:React.FC=()=> {
//   let name:string="nura"
//   let age:number=32
//   let isdone:boolean=true
//   let isActive:number | string  ="necesen"  
  
// type Obj={
//   name:string,
//   age:number,
//   isMarried?:boolean
// }
//   const obj : Obj={
//     name:"nura",
//     age:21
//   }
const [todo, setTodo] = useState<string>("")
const [todosArr, setTodos] = useState<todos[]>([])

const addMessage=()=>{  
  if(todo) {
    setTodos([...todosArr,{text:todo,id:todosArr.length+1}])
  }
 setTodo(" ")

}
const deleteMessage=(id:number)=>{
  setTodos(todosArr.filter((todo)=>todo.id!==id))
}
  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
      <Message deleteMessage={deleteMessage} todosArr={todosArr} setTodos={setTodos}/>
      <Counter/>
    </div>
  );
}

export default App;
