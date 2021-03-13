import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('')

  // to allow typeing on todo
  const handleChange = e => {
    setInput(e.target.value)
  };

  //to prevent page from reloading when clicking "Add todo"
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input
    });
    setInput('')
  };


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'>Add Todo</button>
    </form>
  )
}

export default TodoForm
