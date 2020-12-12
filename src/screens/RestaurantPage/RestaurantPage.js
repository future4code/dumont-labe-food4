import React, { useContext } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { RestaurantAll, RestaurantContainer } from "./styles";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import {NavBottom} from "../../components/NavBottom/NavBottom"
import GlobalStateContext from "../../global/GlobalStateContext";
import QuantityContext from "../../context/QuantityContext";
import RestaurantContext from "../../context/RestaurantContext";

const RestaurantPage = () => {
  const { cart, setCart, updateTotal } = useContext(GlobalStateContext)
  const {setRestaurant} = useContext(RestaurantContext)
  const { quantity, setQuantity } = useContext(QuantityContext);
  const category = [];
  const { id } = useParams();
  const getDetails = useRequestData(`${BASE_URL}/restaurants/${id}`, undefined);

  const addItemToCart = (newItem) => {
    let newCart = [...cart];

    newCart.push({ ...newItem, amount: quantity });
    setRestaurant(getDetails.restaurant)
    setCart(newCart);
    alert(`${newItem.name} foi adicionado ao seu carrinho!`)
    setQuantity(1)
    updateTotal(newItem.price, quantity, true)

  };

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((item) => item.id === itemToRemove.id);
    let newCart = [...cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setCart(newCart)
    updateTotal(itemToRemove.price, 1 , false)

  };

  getDetails &&
    getDetails.restaurant.products.map((item) => {
      return category.push(item.category);
    });

  const filterCategorys = category.filter((el, i, arr) => arr.indexOf(el) === i);

  return (
    <RestaurantAll>
      <NavBar />
      <RestaurantContainer>
        
        {getDetails && (
          <RestaurantCard
            name={getDetails.restaurant.name}
            category={getDetails.restaurant.category}
            image={getDetails.restaurant.logoUrl}
            deliveryTime={getDetails.restaurant.deliveryTime}
            shipping={getDetails.restaurant.shipping}
            address={getDetails.restaurant.address}
          />
        )}
        {filterCategorys.map((categoryName) => {
          return (
            <div key={categoryName}>
              <h4>{categoryName}</h4>
              <hr />
              {getDetails.restaurant.products.map((item) => {
                if (categoryName === item.category) {
                  return (
                    <FoodCard
                      key={item.id}
                      removeItemFromCart={() => removeItemFromCart(item)}
                      addItemToCart={() => addItemToCart(item)}
                      category={item.category}
                      description={item.description}
                      id={item.id}
                      name={item.name}
                      image={item.photoUrl}
                      price={item.price}
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </RestaurantContainer>
      <NavBottom/>
    </RestaurantAll>
  );
};

export default RestaurantPage;
