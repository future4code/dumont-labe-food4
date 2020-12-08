import React from 'react'
import NavBar from '../../components/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import { FeedGrid } from './styles'

const FeedPage = () => {
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)
  console.log(getRestaurants)

  return (
    
    <div>
        <NavBar />
        <p>Filtro</p>
        <FeedGrid>
          {getRestaurants && getRestaurants.restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                id = {restaurant.id}
                address = {restaurant.address}
                deliveryTime = {restaurant.deliveryTime}
                shipping = {restaurant.shipping}
                name = {restaurant.name}
             />
            )
          })}
        </FeedGrid>
    </div>
  )
}

export default FeedPage;