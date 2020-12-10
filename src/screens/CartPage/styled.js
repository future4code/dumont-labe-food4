import styled from "styled-components";

export const CartContainer = styled.div`
  height: 640px;
`;

export const DivTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  align-items: center;
`;

export const DivAdress = styled.div`
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: #eeeeee;
`;

export const DivFormPayment = styled.div`
margin: 0 16px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 30px;
`;

export const Freight = styled.p`
  text-align: end;
  font-size: 18px;
  margin: 33px 16px 14px 60px;
`;

export const DeliveryAddress = styled.p`
  width: 328px;
  height: 18px;
  margin: 5px 0;
  font-size: 18px;
  letter-spacing: -0.39px;
  color: #BEBEBE;
`;
export const Street = styled.p`
  width: 328px;
  height: 18px;
  font-size: 18px;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const Subtotal = styled.p`
    font-size: 18px;
`;

export const Price = styled.p`
    color: #5cb646;
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonConfirm = styled.button`
  width: 360px;
  height: 45px;
  font-size: 18px;
  padding: 12px 16px;
  border-radius: 3px;
  border: none;
  background-color: rgba(92, 182, 70, 0.5);
  margin: 100px 30px 0 28px;
`