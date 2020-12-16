import { FormControl, InputAdornment } from '@material-ui/core';
import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SearchIcon from '@material-ui/icons/Search'
import { AllFeed, SearchContainer, StyledOutlinedInput, FeedContainer } from '../FeedPage/styles'
import { BASE_URL } from '../../constants/urls'
import RestaurantCard from '../../components/RestaurantCard';
import axios from 'axios'
import { axiosConfig } from '../../constants/urls'

const SearchScreen = () => {
  const [search, setSearch] = useState("")
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = () => {
    axios.get(`${BASE_URL}/restaurants`, axiosConfig)
      .then((response) => {
        setRestaurants(response.data.restaurants)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    getRestaurants()
  }

  const filteredRestaurants = restaurants.filter((restaurant) => (
    restaurant.name.toLowerCase().includes(search.toLowerCase())))

  return (
    <AllFeed>
      <NavBar />
      <SearchContainer>
        <FormControl variant="outlined">
          <StyledOutlinedInput
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </SearchContainer>
      <FeedContainer searchScreen>
      {restaurants.length === 0 ? <SearchContainer>Busque por um restaurante</SearchContainer> : (filteredRestaurants.length === 0 ? <SearchContainer>Não achei o restaurante</SearchContainer> : filteredRestaurants.map((restaurant) => {
        return (
          <RestaurantCard
            id={restaurant.id}
            deliveryTime={restaurant.deliveryTime}
            shipping={restaurant.shipping}
            name={restaurant.name}
            image={restaurant.logoUrl}
          />
        )
      }))}
      </FeedContainer>
    </AllFeed>
  )
}

export default SearchScreen;