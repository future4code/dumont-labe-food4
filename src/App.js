import React, { useState } from 'react'
import OptionContext from './context/OptionContext';
import GlobalState from './global/GlobalState';
import Router from './router/Router'

const App = () => {
  const [option, setOption] = useState("")

  const data = { option, setOption }
  return (
    <div>
      <OptionContext.Provider value={data}>
        <GlobalState>
          <Router />
        </GlobalState>
      </OptionContext.Provider>
    </div>
  )
}

export default App;