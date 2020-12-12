import styled from 'styled-components'

export const FoodContainer = styled.div`
    display:flex;
    width: 360px;
    max-width:360px;
    height: 112px;
    border-radius: 8px;
    border: solid 1px #A9A9A9;
    margin-top:10px;
`

export const Img = styled.img`
    width: 90px;
    height: 112px;
    margin-right:10px;
    border-radius: 8px 0px 0px 8px;
    margin: 0 16px 0 0;
`

export const Title = styled.p`
  width: 157px;
  margin: 10px 0px 0 1px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: var(--greyish);
`
export const Price = styled.h3`
  width: 118px;
  margin: 0px 0px 0px 0px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
`
export const ButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:space-between;
  margin: 1px 0 0 0px;
  padding: 0 0 0 5px;
  border-radius: 0px 8px  0px 8px;
  
  
`
export const ButtonAdd = styled.div`
  width: 70px;
  height: 25px;
  margin: 75px 0 0 0;
  padding: 5px 8px 5px 12px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #5cb646;
  color:#5cb646;
  cursor: pointer;
`
export const ButtonRemove = styled.div`
  width: 70px;
  height: 25px;
  padding: 5px 8px 5px 12px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color:#e02020;
  cursor: pointer;
`
export const Count = styled.div`
  width: 15px;
  height: 25px;
  padding: 3px 5px 6px 10px;
  border-radius: 0px 8px  0px 8px;
  border: solid 1px #5cb646;
  color:#5cb646;
  
`