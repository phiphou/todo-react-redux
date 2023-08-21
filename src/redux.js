import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    init: (state) => {
      const existingTodos = localStorage.getItem('todos')
      state = existingTodos ? JSON.parse(existingTodos) : []
      return state
    },
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

export const {
  init,
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  clearAll
} = todoSlice.actions

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})
