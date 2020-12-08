import React from 'react'
import FoodCard from '../../components/FoodCard'
import RestaurantCard from '../../components/RestaurantCard'
import {RestaurantAll, RestaurantContainer} from './styled'
import {useRequestData} from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

const RestaurantPage = () => {

  const getAllAddress = useRequestData(`${BASE_URL}/restaurants/:restaurantId`,undefined)
  
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