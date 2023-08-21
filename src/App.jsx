import React, { lazy, Suspense } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'
import TodoList from './components/TodoList'
import './App.css'
import logo from './logo.svg'
import { store } from './redux'
import { Provider } from 'react-redux'

const About = lazy(() => import('./components/About'))

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div className="header">
            <div className="container">
              <div className="brand">
                <img src={logo} className="logo" />
                <h2>React - Redux TodoList</h2>
              </div>
              <div className="menu">
                <NavLink exact to="/">
                  <div className="menu-item">Home</div>
                </NavLink>
                <NavLink exact to="/about">
                  <div className="menu-item">About</div>
                </NavLink>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route
              path="/about"
              exact
              render={() => (
                <Suspense
                  fallback={
                    <div className="container">
                      <h1>Loading…</h1>
                    </div>
                  }
                >
                  <About />
                </Suspense>
              )}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
