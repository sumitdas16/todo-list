import React from 'react'
import "./stylesheets/Todo.css";

import { useState } from 'react';


const EditTodoForm = ({editTodo, task}) => {

  const [value, setvalue] = useState(task.task);
  const HandleSubmit = (e) => {
    e.preventDefault();
    
    editTodo(value , task.id);

    setvalue("");
  }
  return (
    <form className='todoform' onSubmit={HandleSubmit}>
        <div className='todo-items'><input type='text' className='todo-input' placeholder='Update task' value={value} onChange={(e) => { setvalue(e.target.value); }}></input>
          <button type='submit' className='todo-btn'>Update</button></div>
    </form>
  )
}

export default EditTodoForm

