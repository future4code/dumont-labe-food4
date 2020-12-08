import React from "react";
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

const CartPage = () => {
  return (
    <CartContainer>
      <p>Meu carrinho</p>
      <DivAdress>
        <DeliveryAddress>Endereço de entrega</DeliveryAddress>
        <Street>Rua Alessandra Veira, 42</Street>
      </DivAdress>
      <div>
        <Text>Carrinho Vazio</Text>
        <Freight>Frete R$0,00</Freight>
      </div>
      <DivTotal>
        <Subtotal>SUBTOTAL</Subtotal>
        <Price>R$00.00</Price>
      </DivTotal>
      <DivFormPayment>
        <p>Forma de Pagamento</p>
        <hr/>
        <RadioGroup>
          <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
          <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de Crédito" />
        </RadioGroup>
      </DivFormPayment>
      <ButtonConfirm type="submit">
        Confirmar
      </ButtonConfirm>
    </CartContainer>
  );
};

export default CartPage;
