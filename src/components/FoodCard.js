import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import GlobalStateContext from '../global/GlobalStateContext'
import AlertDialog from './AlertDialog'

const FoodContainer = styled.div`
    display:flex;
    width: 360px;
    max-width:360px;
    height: 112px;
    border-radius: 8px;
    border: solid 1px #A9A9A9;
    margin-top:10px;
`

const Img = styled.img`
    width: 90px;
    /* width: 112px; */
    height: 112px;
    margin-right:10px;
    border-radius: 8px 0px 0px 8px;
    margin: 0 16px 0 0;
    /* object-fit: contain; */
`

const Title = styled.p`
  width: 157px;
  /* height: 18px; */
  margin: 10px 0px 0 1px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
`
const Description = styled.p`
  /* width: 120px; */
  /* height: 60px; */
  /* margin: 8px 16px 8px; */
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: var(--greyish);
`
const Price = styled.h3`
  width: 118px;
  /* height: 19px; */
  margin: 0px 0px 0px 0px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
`
const ButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:space-between;
  margin: 1px 0 0 0px;
  padding: 0 0 0 5px;
  border-radius: 0px 8px  0px 8px;
  
  
`
const ButtonAdd = styled.div`
  width: 70px;
  height: 25px;
  margin: 75px 0 0 0;
  padding: 5px 8px 5px 12px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #5cb646;
  color:#5cb646;
  cursor: pointer;
`
const ButtonRemove = styled.div`
  width: 70px;
  height: 25px;
  /* margin: 0 0 0 45px; */
  padding: 5px 8px 5px 12px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color:#e02020;
  cursor: pointer;
`
const Count = styled.div`
  width: 15px;
  height: 25px;
  /* margin: 0x 0 0 0px; */
  padding: 3px 5px 6px 10px;
  border-radius: 0px 8px  0px 8px;
  border: solid 1px #5cb646;
  color:#5cb646;
  
`

const FoodCard = (props) => {
  const {cart} = useContext(GlobalStateContext)
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