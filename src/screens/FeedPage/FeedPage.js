import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import {FeedContainer,AllFeed } from './styles'

const FeedPage = () => {
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)
  console.log(getRestaurants)

  return (
    <AllFeed> 
        <NavBar />
        <FeedContainer>
          {/* <RestaurantCardContainer> */}
            {getRestaurants && getRestaurants.restaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  id = {restaurant.id}
                  deliveryTime = {restaurant.deliveryTime}
                  shipping = {restaurant.shipping}
                  name = {restaurant.name}
                  image = {restaurant.logoUrl}
              />
              )
            })}
          {/* </RestaurantCardContainer> */}
        </FeedContainer>
    </AllFeed>
    
  )
}

export default FeedPage;