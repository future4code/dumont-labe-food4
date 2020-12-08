import React from 'react'
import NavBar from '../../components/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'

const FeedPage = () => {
  const [data, getData] = useRequestData(`${BASE_URL}/restaurants`)
  console.log(data)
  console.log(getData)

  return (
    <div>
      <NavBar />
      <RestaurantCard />
    </div>
  )
}

export default FeedPage;