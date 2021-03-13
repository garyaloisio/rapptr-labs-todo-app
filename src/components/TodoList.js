import React, { useState } from 'react'
import Todo from './Todo';
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

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    //update state of Todo

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = id => {
    //removes todo from array
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      //toggles between true and false
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setTodos(updatedTodos)
  }


  return (
    <div>
      <h1>Hello</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos} completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
