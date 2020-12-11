import React, { useState } from 'react'
import QuantityContext from './context/QuantityContext';
import RestaurantContext from './context/RestaurantContext';
import GlobalState from './global/GlobalState';
import Router from './router/Router'

const App = () => {
  const [quantity, setQuantity] = useState(1)
  const [restaurant, setRestaurant] = useState({})

  const option = { quantity, setQuantity }

  const resInfo = { restaurant, setRestaurant }
  return (
    <div>
      <QuantityContext.Provider value={option}>
        <RestaurantContext.Provider value={resInfo}>
          <GlobalState>
            <Router />
          </GlobalState>
        </RestaurantContext.Provider>
      </QuantityContext.Provider>
    </div>
  )
}

export default App;