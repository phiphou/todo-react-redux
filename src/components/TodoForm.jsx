import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, clearAll, clearCompleted } from '../redux'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const OnTodoAdd = (e) => {
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo('')
  }

  const onClearCompleted = (e) => {
    e.preventDefault()
    dispatch(clearCompleted())
    setTodo('')
  }

  const onClearAll = (e) => {
    e.preventDefault()
    dispatch(clearAll())
    setTodo('')
  }

  return (
    <div>
      <form onSubmit={(e) => OnTodoAdd(e)}>
        <input
          type="text"
          value={todo}
          placeholder="Thing to be done?"
          onInput={(e) => setTodo(e.target.value)}
        />
        <button type="submit" disabled={todo === ''}>
          Add Todo
        </button>
      </form>
      <div className="clearBtns">
        <button className="clearBtn" onClick={(e) => onClearCompleted(e)}>
          Clear completed
        </button>
        <button className="clearBtn" onClick={(e) => onClearAll(e)}>
          Clear all tasks
        </button>
      </div>
    </div>
  )
}

export default TodoForm
