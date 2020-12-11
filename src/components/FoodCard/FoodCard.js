import React, { useContext, useState } from 'react'
import { FoodContainer, Img, Title, Description, Price, ButtonContainer, ButtonAdd, ButtonRemove, Count} from './styles'
import GlobalStateContext from '../../global/GlobalStateContext'
import AlertDialog from '../AlertDialog'



const FoodCard = (props) => {
  const { cart } = useContext(GlobalStateContext)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const changeButton = () => {
    const index = cart.findIndex((i) => i.id === props.id)
    if (index === -1) {
      return (
        <ButtonContainer>
          <ButtonAdd onClick={handleClickOpen}> Adicionar </ButtonAdd>
        </ButtonContainer>
      )

    } else {
      return (
        <ButtonContainer>
          {cart.map((item) => {
            return item.id === props.id && <Count>{item.amount}</Count>
          })}
          <ButtonRemove onClick={props.removeItemFromCart}> Remover </ButtonRemove>
        </ButtonContainer>

      )

    }
  }

  return (

    <FoodContainer>
      <Img src={props.image} />
      <div>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Price>R$ {props.price}</Price>
      </div>
      {changeButton()}
      <AlertDialog handleClose={handleClose} addItemToCart={props.addItemToCart} open={open} />
    </FoodContainer>



  );
}

export default FoodCard