import React from 'react'
import "./stylesheets/Todoform.css";
import { MdAddTask } from "react-icons/md";
import { useState } from 'react';


const TodoForm = ({addTodo}) => {

  const [value, setvalue] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    
    addTodo(value);

    setvalue("");
  }
  return (
    <form className='todoform' onSubmit={HandleSubmit}>
        <div className='todo-items'><input type='text' className='todo-input' placeholder='What is the task for today?' value={value} onChange={(e) => { setvalue(e.target.value); }}></input>
          <button type='submit' className='todo-btn'>Add<MdAddTask style={{ fontSize: 21 }} /></button></div>
    </form>
  )
}

export default TodoForm
