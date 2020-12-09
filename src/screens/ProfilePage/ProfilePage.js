import React from 'react'
import { Typography, IconButton, CircularProgress } from '@material-ui/core'
import { BaseContainer, FlexBox, Divisor } from './profile-styles'
import OrdesHistoryCard from '../../components/OrdersHistoryCard/OrdersHistoryCard'
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { goToEditProfile, goToAdress } from '../../router/coordinator';
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/urls'
import { NavBottom } from "../../components/NavBottom/NavBottom"

const ProfilePage = () => {
  const history = useHistory()
  const userData = useRequestData(`${BASE_URL}/profile`, undefined) 

  return (
    userData ?
    <div>
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
      <OrdesHistoryCard/>
      <OrdesHistoryCard/>
      <NavBottom changeColor={false}/>
    </div> :
    <FlexBox>
      <CircularProgress color="secondary"/>
    </FlexBox>
  )
}

export default ProfilePage;