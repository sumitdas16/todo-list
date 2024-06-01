import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./stylesheets/Todo.css"

const Todo = ({task, editTodo, deleteTodo, toggleComplete}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} style={{cursor: 'pointer'}} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div className='btn'>
        <FaEdit onClick={()=>{editTodo(task.id)}} style={{fontSize: 22}}/>
        <MdDelete  onClick={()=>{deleteTodo(task.id)}} style={{fontSize: 22}}/>
      </div>
    </div>
  )
}

export default Todo
