import React from 'react'
import GlobalState from './global/GlobalState';
import Router from './router/Router'

const App = () => {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  )
}

export default App;