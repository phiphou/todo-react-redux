import React from 'react'

export default function About() {
  return (
    <div className="container">
      <h3>About</h3>
      This app has been built with{' '}
      <a href="https://reactjs.org/" target="_blank">
        React
      </a>
      .
      <br />
      <br />
      It uses React Hooks like <code>useState</code> and <code>useEffect</code>.
      <br />
      <br />
      It also uses{' '}
      <a href="https://reactrouter.com/web/guides/quick-start">
        react-router-dom
      </a>{' '}
      as a routing solution.
      <br />
      <br />
      It uses <a href="https://redux-toolkit.js.org/">redux-toolkit</a> and{' '}
      <a href="https://react-redux.js.org/">react-redux</a> as a global store
      mechanism.
      <br />
      <br />
      You can add a task, delete it and toggle task completed status.
      <br />
      <br />
      You can also clear all the tasks or only the completed ones.
      <br />
      <br />
      Tasks are locally stored using <code>LocalStorage.</code>
      <br />
      <br />
      This about page is lazy loaded.
    </div>
  )
}
