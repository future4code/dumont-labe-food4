import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SearchIcon from '@material-ui/icons/Search'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import RestaurantCard from '../../components/RestaurantCard';

const SearchScreen = () => {
  const [search, setSearch] = useState("")

  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <NavBar />
      <div>
        <FormControl variant="outlined">
          <OutlinedInput
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      {getRestaurants && getRestaurants.restaurants.filter((restaurant) => (
            restaurant.name.toLowerCase().includes(search.toLowerCase()))).map((restaurant) => {
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

    </div>
  )
}

export default SearchScreen;