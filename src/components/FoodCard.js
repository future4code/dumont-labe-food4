import React from 'react'
import styled from 'styled-components'

const FoodContainer=styled.div`
    display:flex;
    width: 344px;
    max-width:320px;
    height: 112px;
    border-radius: 8px;
    border: solid 1px grey;
    margin-top:10px;
`   

const Img=styled.img`
    width: 90px;
    height: 112px;
    margin-right:10px;
    border-radius: 8px 0px 0px 8px;
    /* margin: 0 16px 0 0; */
    /* object-fit: contain; */
` 

const Title=styled.p`
  /* width: 167px; */
  height: 18px;
  margin: 18 0px 0 1px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
` 
const Description=styled.p`
  /* width: 100px; */
  height: 30px;
  /* margin: 8px 16px 4px; */
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: var(--greyish);
` 
const Price=styled.h3`
  /* width: 118px; */
  height: 19px;
  margin: 0px 0px 0px 0px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
` 
const ButtonContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  /* margin: 1px 0 0 0px; */
  /* padding: 0 0 0 5px; */
  /* border-radius: 0px 8px  0px 8px; */
  
  
`
const ButtonAdd=styled.div`
  width: 70px;
  height: 25px;
  margin: 75px 0 0 0;
  padding: 5px 8px 5px 12px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #5cb646;
  color:#5cb646;
  
`
const ButtonRemove=styled.div`
  width: 70px;
  height: 25px;
  margin: 45px 0 0 0;
  padding: 5px 8px 5px 12px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color:#e02020;
  
`
const Count=styled.div`
  width: 15px;
  height: 25px;
  /* margin: 0x 0 0 0px; */
  padding: 3px 5px 6px 10px;
  border-radius: 0px 8px  0px 8px;
  border: solid 1px #5cb646;
  color:#5cb646;
  
`
// const OutContainer=styled.div`
//    width: 360px;
//   height: 120px;
//   margin: 8px 0 0;
//   padding: 0 16px;

const FoodCard = () => {

    const changeButton=(counts)=>{
        if(counts>0){
            return(
                <ButtonContainer>
                    <Count> 2 </Count> 
                    <ButtonRemove> Remover </ButtonRemove>  
                </ButtonContainer>

            )
            
        }else{
            return(
                <ButtonContainer>
                    <ButtonAdd> Adicionar </ButtonAdd>  
                 </ButtonContainer>
            )
            
        }
    }


  return (
        
            <FoodContainer>
                <Img src="https://blog.tf.com.br/wp-content/uploads/2019/09/pink-burger.jpg"/>
                <div>
                    <Title>Bullger</Title>
                    <Description>Pão, carne, queijo, picles e molho</Description>
                    <Price>R$ 20,00</Price>
                </div>
                {changeButton(1)}
                
            </FoodContainer>
        
    
    
  );
}

export default FoodCard