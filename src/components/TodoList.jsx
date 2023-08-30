import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { init, initFilter, filter } from '../redux'
import Todo from './Todo'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo)
  const filteredTodos = useSelector((state) => state.filteredTodos)
  const filterMode = useSelector((state) => state.filter)

  useEffect(() => {
    dispatch(init())
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    dispatch(initFilter(todos))
    dispatch(filter({ mode: filterMode, todos: todos }))
  }, [todos])

  useEffect(() => {
    dispatch(filter({ mode: filterMode, todos: todos }))
  }, [filterMode])

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
