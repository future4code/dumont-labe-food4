import { FormControl, InputAdornment } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import {FeedContainer, AllFeed, StyledOutlinedInput, SearchContainer, Carousel, CarouselContainer } from './styles'
import {NavBottom} from "../../components/NavBottom/NavBottom"
import SearchIcon from '@material-ui/icons/Search';
import { goToSearch } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import SnackBar from '../../components/SnackBar/SnackBar'
import axios from 'axios'
import {axiosConfig} from '../../constants/urls'

const FeedPage = () => {
  useProtectedPage()
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)
  const [orderInfo, setOrderInfo] = useState({})
  const history = useHistory()
  const category = []
  const [choice, setChoice] = useState(false)
  const [newCategory, setNewCategory]=useState("")
  const [open, setOpen] = useState(true);

  getRestaurants &&
    getRestaurants.restaurants.map((item) => {
      return category.push(item.category);
    });

  const filterCategorys = category.filter((el, i, arr) => arr.indexOf(el) === i);

  const goToCategory = (category) => {
    setChoice(true)
    setNewCategory(category)
  }

  useEffect(() => {
    getActiveOrder()
  }, [])

  const getActiveOrder = () => {
    axios.get(`${BASE_URL}/active-order`, axiosConfig)
        .then((response) => {
            console.log(response.data)

            if(response.data.order === null) {
              setOpen(false)
            } else {
              setOpen(true)
              setOrderInfo(response.data.order)
            }
        })
        .catch((erro) => {
            console.log(erro);
        });
  }
  
  return (
    <AllFeed>
      <NavBar />
      <SearchContainer>
        <FormControl variant="outlined">
          <StyledOutlinedInput
            onClick={() => goToSearch(history)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </SearchContainer>
      
      <CarouselContainer> 
        <Carousel onClick={()=>setChoice(false)}> Todas</Carousel>
         {filterCategorys.map((restaurantCategory) => {
        return (
          <Carousel key={restaurantCategory} onClick={()=>goToCategory(restaurantCategory)}> {restaurantCategory} </Carousel>
        )
      })}</CarouselContainer>

      <FeedContainer>
       {choice? 
          (getRestaurants && getRestaurants.restaurants.map((restaurant) => {
            if (newCategory === restaurant.category) {
              return (
                <RestaurantCard 
                  key={restaurant.id}
                  id={restaurant.id}
                  deliveryTime={restaurant.deliveryTime}
                  shipping = {restaurant.shipping}
                  name={restaurant.name}
                  image={restaurant.logoUrl}
                />
              )
            }
          }))       
        :
        (getRestaurants && getRestaurants.restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id}
              id={restaurant.id}
              deliveryTime={restaurant.deliveryTime}
              shipping = {restaurant.shipping}
              name={restaurant.name}
              image={restaurant.logoUrl}
            />
          )
        })
        )
      }
       
      </FeedContainer>
      <SnackBar totalPrice={orderInfo.totalPrice} restaurant={orderInfo.restaurantName} open={open} />
      
      <NavBottom changeColorHome={true}/>
    </AllFeed>
  )
}

export default FeedPage;