import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import {FeedContainer,AllFeed } from './styles'
import {NavBottom} from "../../components/NavBottom/NavBottom"
import SearchIcon from '@material-ui/icons/Search';
import {goToSearch} from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'


const FeedPage = () => {
  useProtectedPage()
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)
  const history = useHistory()

  return (
    <AllFeed> 
        <NavBar />
        <div>
          <FormControl variant="outlined">
            <OutlinedInput
              onClick={() => goToSearch(history)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <FeedContainer>
            {getRestaurants && getRestaurants.restaurants.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.id}
                  id={restaurant.id}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                  name={restaurant.name}
                  image={restaurant.logoUrl}
              />
              )
            })}
      
          <NavBottom changeColorHome={true}/>
        </FeedContainer>
    </AllFeed>
    
  )
}

export default FeedPage;