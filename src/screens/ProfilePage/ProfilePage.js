import React from 'react'
import { Typography, IconButton } from '@material-ui/core'
import { BaseContainer, FlexBox, Divisor, ProgressStyled, ButtonLogout, ButtonBox, ProfilePageContainer } from './profile-styles'
import OrdesHistoryCard from '../../components/OrdersHistoryCard/OrdersHistoryCard'
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { goToEditProfile, goToAdress, logout } from '../../router/coordinator';
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { NavBottom } from "../../components/NavBottom/NavBottom"
import NavBar from '../../components/NavBar/NavBar'
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';

const ProfilePage = () => {
  const history = useHistory()
  const userData = useRequestData(`${BASE_URL}/profile`, undefined) 
  const ordersHistory = useRequestData(`${BASE_URL}/orders/history`, undefined)

  return (
    <div>
       {userData ?
    <ProfilePageContainer>
      <NavBar />
      <FlexBox>
        <BaseContainer>
          <Typography variant="h6">{userData.user.name}</Typography>
          <IconButton onClick={() => goToEditProfile(history)}>
            <EditIcon/>
          </IconButton>
        </BaseContainer>
        <Typography variant="h6">{userData.user.email}</Typography>
        <Typography variant="h6">{userData.user.cpf}</Typography>
      </FlexBox>
      <FlexBox greyBackground>
        <BaseContainer>
          <Typography color="textSecondary" variant="h6">Endereço cadastrado</Typography>
          <IconButton onClick={() => goToAdress(history)}>
            <EditIcon/>
          </IconButton>
        </BaseContainer>
        <Typography variant="h6">{userData.user.address}</Typography>
      </FlexBox>
      <FlexBox>
        <Typography variant="h6">Histórico de pedidos</Typography>
        <Divisor/>
      </FlexBox>
      {ordersHistory && ordersHistory.orders.map((order, id) => {
        console.log(order)
        return (
          <OrdesHistoryCard
            key={id}
            restaurantName={order.restaurantName}
            date={order.createdAt}
            price={order.totalPrice}
          />
        ) 
      })}
    <ButtonLogout onClick={() => logout(history)}>
      <ButtonBox>
        <SettingsPowerIcon />
        Sair
      </ButtonBox>
    </ButtonLogout>
    <NavBottom changeColorAvatar={true}/>
    </ProfilePageContainer> :
    <div>
      <NavBar />
      <ProgressStyled color="secondary"/>
      <NavBottom changeColorAvatar={true}/>
    </div>
  }
    </div>
  )
}

export default ProfilePage;