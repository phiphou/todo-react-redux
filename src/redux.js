import { createSlice, configureStore } from '@reduxjs/toolkit'

export const FILTER_ALL = 'FILTER_ALL'
export const FILTER_COMPLETED = 'FILTER_COMPLETED'
export const FILTER_UNCOMPLETED = 'FILTER_UNCOMPLETED'

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

const filteredTodosSlice = createSlice({
  name: 'filteredTodos',
  initialState: [],
  reducers: {
    initFilter: (state, action) => {
      state = action.payload
      return state
    },
    filter: (state, action) => {
      switch (action.payload.mode) {
        case FILTER_ALL:
          state = action.payload.todos
          return state
          break
        case FILTER_COMPLETED:
          state = action.payload.todos.filter((todo) => todo.completed)
          return state
          break
        case FILTER_UNCOMPLETED:
          state = action.payload.todos.filter((todo) => !todo.completed)
          return state
          break
      }
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

export const { filter, initFilter } = filteredTodosSlice.actions

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    filter: filterSlice.reducer,
    filteredTodos: filteredTodosSlice.reducer
  }
})
