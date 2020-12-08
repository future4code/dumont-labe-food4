import React from 'react'
import { Typography, IconButton } from '@material-ui/core'
import { BaseContainer, FlexBox, Divisor } from './profile-styles'
import OrdesHistoryCard from '../../components/OrdersHistoryCard/OrdersHistoryCard'
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { goToEditProfile, goToAdress } from '../../router/coordinator';

const ProfilePage = () => {
  const history = useHistory()

  return (
    <div>
      <FlexBox>
        <BaseContainer>
          <Typography variant="h6">Bruna Oliveira</Typography>
          <IconButton onClick={() => goToEditProfile(history)}>
            <EditIcon/>
          </IconButton>
        </BaseContainer>
        <Typography variant="h6">bruna_o@gmail.com</Typography>
        <Typography variant="h6">333.333.333-33</Typography>
      </FlexBox>
      <FlexBox greyBackground>
        <BaseContainer>
          <Typography color="textSecondary" variant="h6">Endereço cadastrado</Typography>
          <IconButton onClick={() => goToAdress(history)}>
            <EditIcon/>
          </IconButton>
        </BaseContainer>
        <Typography variant="h6">Rua Alessandra Vieira, 42 - Santana</Typography>
      </FlexBox>
      <FlexBox>
        <Typography variant="h6">Histórico de pedidos</Typography>
        <Divisor/>
      </FlexBox>
      <OrdesHistoryCard/>
      <OrdesHistoryCard/>
    </div>
  )
}

export default ProfilePage;