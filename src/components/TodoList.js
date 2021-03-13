import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    // this is to elimnate whitespace when entering text
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //this varibale is to store todos from Todo Form
    const newTodos = [todo, ...todos];

    setTodos(newTodos);

  }

  return (
    <div>
      <h1>Hello</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList
