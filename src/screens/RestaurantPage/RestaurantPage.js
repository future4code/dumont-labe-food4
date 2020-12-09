import React from 'react'
import FoodCard from '../../components/FoodCard'
import RestaurantCard from '../../components/RestaurantCard'
import {RestaurantAll, RestaurantContainer} from './styled'
import {useRequestData} from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import {useParams} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const RestaurantPage = () => {
  const {id} = useParams()
  const getDetails = useRequestData(`${BASE_URL}/restaurants/${id}`,undefined)
  console.log(getDetails)
  return (
    <RestaurantAll>
        <RestaurantContainer>
            <NavBar/>
            {getDetails && <RestaurantCard
              name={getDetails.restaurant.name}
              category={getDetails.restaurant.category}
              image={getDetails.restaurant.logoUrl}
              deliveryTime={getDetails.restaurant.deliveryTime}
              shipping={getDetails.restaurant.shipping}
              address={getDetails.restaurant.address}
            />}
            {getDetails && getDetails.restaurant.products.map((item)=>{
              return(
                <FoodCard
                  category={item.category}
                  description={item.description}
                  id={item.id}
                  name={item.name}
                  image={item.photoUrl}
                  price={item.price} 

                />
              )
            })}
            
        </RestaurantContainer>
    </RestaurantAll>
    
  )
}

export default RestaurantPage;