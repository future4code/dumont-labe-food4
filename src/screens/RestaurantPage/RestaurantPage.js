import React from 'react'
import FoodCard from '../../components/FoodCard'
import RestaurantCard from '../../components/RestaurantCard'
import {RestaurantAll, RestaurantContainer} from './styled'
const RestaurantPage = () => {
  return (
    <RestaurantAll>
        <RestaurantContainer>
            <RestaurantCard/>
            <FoodCard/>
        </RestaurantContainer>
    </RestaurantAll>
    
  )
}

export default RestaurantPage;