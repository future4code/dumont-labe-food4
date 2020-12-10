import { FormControl, InputAdornment, OutlinedInput } from '@material-ui/core'
import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RestaurantCard from '../../components/RestaurantCard'
import { BASE_URL } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import {FeedContainer,AllFeed,Carousel,CarouselContainer } from './styles'
import {NavBottom} from "../../components/NavBottom/NavBottom"
import SearchIcon from '@material-ui/icons/Search';
import { goToSearch } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'


const FeedPage = () => {
  useProtectedPage()
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, undefined)
  const history = useHistory()
  const category = []
  const [choice, setChoice] = useState(false)
  const [newCategory, setNewCategory]=useState("")

  getRestaurants &&
    getRestaurants.restaurants.map((item) => {
      return category.push(item.category);
    });

  const filterCategorys = category.filter((el, i, arr) => arr.indexOf(el) === i);

  const goToCategory = (category) => {
    setChoice(true)
    setNewCategory(category)
  }
  






  getRestaurants &&
  getRestaurants.restaurants.map((item) => {
      return category.push(item.category);
    });

  const filterCategorys = category.filter((el, i, arr) => arr.indexOf(el) === i);

 const goToCategory=()=>{
  setChoice(true)
 }
 console.log(choice)

 
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
                    <RestaurantCard key={restaurant.id}
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
        <NavBottom changeColorHome={true} />
      </FeedContainer
    </AllFeed>

  )
}

export default FeedPage;