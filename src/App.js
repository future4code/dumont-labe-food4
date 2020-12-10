import React, { useState } from 'react'
import OptionContext from './context/OptionContext';
import RestaurantContext from './context/RestaurantContext';
import GlobalState from './global/GlobalState';
import Router from './router/Router'

const App = () => {
  const [option, setOption] = useState(1)
  const [restaurant, setRestaurant] = useState({})

  const data = { option, setOption }

  const resInfo = { restaurant, setRestaurant }
  return (
    <div>
      <OptionContext.Provider value={data}>
        <RestaurantContext.Provider value={resInfo}>
          <GlobalState>
            <Router />
          </GlobalState>
        </RestaurantContext.Provider>
      </OptionContext.Provider>
    </div>
  )
}

export default App;