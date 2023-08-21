import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  const onToggleCompleted = (todo) => {
    dispatch(toggleTodo(todo.id))
  }

  const onDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo)}
      />
      <div className={todo.completed ? 'todoLabel completed' : 'todoLabel'}>
        {todo.name}
      </div>
      <button className="deleteBtn" onClick={() => onDeleteTodo(todo)}>
        X
      </button>
    </div>
  )
}

export default Todo
