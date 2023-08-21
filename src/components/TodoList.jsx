import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { init } from '../redux'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  const dispatch = useDispatch()
  let todos = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(init())
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <h3>Todos</h3>
      <div className="infos">
        {todos.filter((todo) => todo.completed).length} of {todos.length}{' '}
        completed
      </div>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
