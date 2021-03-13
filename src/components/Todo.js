import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { BsTrashFill } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })


  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }


  //map through todos so we can go through pur array of todos
  return todos.map((todo, index) => (
    //to check if  todo completed and trigger animation

    //className Icons is to add icons, i am using npm react icons
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <GoPencil
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <BsTrashFill
          onClick={() => removeTodo(todo.id)}
          className='delete-icon' />
      </div>
    </div>
  ))
}

export default Todo
