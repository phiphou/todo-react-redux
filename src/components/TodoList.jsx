import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  init,
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_UNCOMPLETED
} from '../redux'
import Todo from './Todo'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo)
  const filterMode = useSelector((state) => state.filter)

  const filteredTodos = todos.filter((todo) => {
    switch (filterMode) {
      case FILTER_ALL:
        return true
      case FILTER_COMPLETED:
        return todo.completed
      case FILTER_UNCOMPLETED:
        return !todo.completed
    }
  })

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
      <TodoFilter />
      <TodoForm />
      <ul>
        {filteredTodos &&
          filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

export default TodoList
