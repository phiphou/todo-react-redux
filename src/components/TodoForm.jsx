import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, clearAll, clearCompleted } from '../redux'

const TodoForm = () => {
  const dispatch = useDispatch()

  const OnTodoAdd = (e) => {
    e.preventDefault()
    const form = e.target
    const text = new FormData(e.target).get('todo')
    if (text) {
      dispatch(addTodo(text))
      form.reset()
    }
  }

  return (
    <div>
      <form onSubmit={(e) => OnTodoAdd(e)}>
        <input type="text" name="todo" placeholder="Thing to be done?" />
        <button type="submit">Add Todo</button>
      </form>
      <div className="clearBtns">
        <button className="clearBtn" onClick={() => dispatch(clearCompleted())}>
          Clear completed
        </button>
        <button className="clearBtn" onClick={() => dispatch(clearAll())}>
          Clear all tasks
        </button>
      </div>
    </div>
  )
}

export default TodoForm
