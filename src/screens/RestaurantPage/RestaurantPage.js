import React, { useContext } from 'react'
import FoodCard from '../../components/FoodCard'
import RestaurantCard from '../../components/RestaurantCard'
import {RestaurantAll, RestaurantContainer} from './styled'
import {useRequestData} from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import {useParams} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import GlobalStateContext from '../../global/GlobalStateContext'
import OptionContext from '../../context/OptionContext'

const RestaurantPage = () => {
  const {cart, setCart} = useContext(GlobalStateContext)
  const {option} = useContext(OptionContext)

  const {id} = useParams()
  const getDetails = useRequestData(`${BASE_URL}/restaurants/${id}`,undefined)

  const addItemToCart = (newItem) => {
    let newCart = [...cart]
    
    newCart.push({ ...newItem, amount: option })
      
    setCart(newCart);
    alert(`${newItem.name} foi adicionado ao seu carrinho!`)
  }

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((item) => item.id === itemToRemove.id)
    let newCart = [...cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1)
    } else {
      newCart[index].amount -= 1
    }
    setCart(newCart)
  }

  return (
    <RestaurantAll>
        <NavBar/>
        <RestaurantContainer>
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
                  removeItemFromCart={() => removeItemFromCart(item)}
                  addItemToCart={() => addItemToCart(item)}
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