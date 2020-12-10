import React, { useContext, useState } from "react";
import {
  CartContainer,
  DivAdress,
  Text,
  Freight,
  DivTotal,
  Street,
  DeliveryAddress,
  Subtotal,
  Price,
  ButtonConfirm,
  DivFormPayment
} from "./styled";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { NavBottom } from "../../components/NavBottom/NavBottom"
import NavBar from "../../components/NavBar/NavBar";
import GlobalStateContext from "../../global/GlobalStateContext";
import FoodCard from "../../components/FoodCard";
import RestaurantContext from "../../context/RestaurantContext";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";


const CartPage = () => {
  const { cart, setCart, subtotal, updateTotal } = useContext(GlobalStateContext)
  const {restaurant} = useContext(RestaurantContext)
  const getAddress = useRequestData(`${BASE_URL}/profile/address`, undefined)
  const [paymentMethod, setPaymentMethod] = useState("money")

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((item) => item.id === itemToRemove.id);
    let newCart = [...cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setCart(newCart);
    updateTotal(itemToRemove.price, 1, false)
  };

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value)
    console.log(event.target.value)
  }

  return (
    <CartContainer>
      <NavBar />
      <DivAdress>
        <DeliveryAddress>Endereço de entrega</DeliveryAddress>
        {getAddress &&  <Street>{getAddress.address.street} , {getAddress.address.number}</Street>}
      </DivAdress>
      <div>
        {cart.length === 0 ? <div>
          <Text>Carrinho Vazio</Text>
        </div> : <div>
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.address}</h2>
        <h3>{restaurant.deliveryTime} min</h3>
        {cart.map((item) => {
          return <FoodCard
          key={item.id}
          removeItemFromCart={() => removeItemFromCart(item)}
          category={item.category}
          description={item.description}
          id={item.id}
          name={item.name}
          image={item.photoUrl}
          price={item.price}
        />
        })}
        </div>}
      </div>

      <Freight>Frete R${subtotal!==0 ? `${restaurant.shipping}.00` : "00.00"}</Freight>
      <DivTotal>
        <Subtotal>SUBTOTAL</Subtotal>
        <Price>R${subtotal!==0 ? (subtotal + restaurant.shipping) : "00.00"}</Price>
      </DivTotal>
      <DivFormPayment>
        <p>Forma de Pagamento</p>
        <hr />
        <RadioGroup onChange={handlePaymentMethod} value={paymentMethod}>
          <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
          <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
        </RadioGroup>
      </DivFormPayment>
      <ButtonConfirm type="submit">
        Confirmar
      </ButtonConfirm>
      <NavBottom changeColorCart={true} />
    </CartContainer>
  );
};

export default CartPage;
