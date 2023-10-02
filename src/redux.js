import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const FILTER_ALL = 'FILTER_ALL'
export const FILTER_COMPLETED = 'FILTER_COMPLETED'
export const FILTER_UNCOMPLETED = 'FILTER_UNCOMPLETED'

const existingTodos = localStorage.getItem('todos')

const todoSlice = createSlice({
  name: 'todo',
  initialState: existingTodos ? JSON.parse(existingTodos) : [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        name: action.payload,
        completed: false
      }
      state = [newTodo, ...state]
      return state
    },
    toggleTodo: (state, action) => {
      state = state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      )
      return state
    },
    deleteTodo: (state, action) => {
      state = state.filter((t) => t.id !== action.payload)
      return state
    },
    clearCompleted: (state) => {
      state = state.filter((todo) => !todo.completed)
      return state
    },
    clearAll: (state) => {
      state = []
      localStorage.removeItem('todos')
      return state
    }
  }
})

const filterSlice = createSlice({
  name: 'filter',
  initialState: FILTER_ALL,
  reducers: {
    updateFilter: (state, action) => {
      state = action.payload
      return state
    }
  }
})

export const {
  init,
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  clearAll
} = todoSlice.actions

export const { updateFilter } = filterSlice.actions

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    filter: filterSlice.reducer
  }
})

export const UseTodos = () => {
  const todos = useSelector((state) => state.todo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
  return {
    todos,
    filterMode,
    filteredTodos
  }
}
