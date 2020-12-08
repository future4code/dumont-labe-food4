import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import { RestaurantCardContainer, FeedContainer } from './styles'

const FeedPage = () => {
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)
  console.log(getRestaurants)

  return (
    
    <FeedContainer>
        <NavBar />
        <p>Filtro</p>
        <RestaurantCardContainer>
          {getRestaurants && getRestaurants.restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                id = {restaurant.id}
                address = {restaurant.address}
                deliveryTime = {restaurant.deliveryTime}
                shipping = {restaurant.shipping}
                name = {restaurant.name}
                image = {restaurant.logoUrl}
             />
            )
          })}
        </RestaurantCardContainer>
    </FeedContainer>
  )
}

export default FeedPage;