import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { goBack } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Title, Title2, NavBarContainer } from './styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
})); 

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Switch>
        <Route exact path={`/restaurant/:id`}>
          <NavBarContainer>
            <IconButton onClick={() => goBack(history)} className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <Title>
              Restaurante
            </Title>
          </NavBarContainer>
        </Route>
        <Route exact path={'/editprofile'}>
          <NavBarContainer>
            <IconButton onClick={() => goBack(history)} className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <Title>
              Editar
            </Title>
          </NavBarContainer>
        </Route>
        <Route exact path={'/address'}>
          <NavBarContainer>
            <IconButton onClick={() => goBack(history)} className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <Title>
              Endereço
            </Title>
          </NavBarContainer>
        </Route>
        <Route exact path={['/address', '/signup']}>
          <NavBarContainer>
            <IconButton onClick={() => goBack(history)} className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
          </NavBarContainer>
        </Route>
        <Route exact path={['/', '/home']}>
          <NavBarContainer>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu"/>
            <Title2>
              FutureEats
            </Title2>
          </NavBarContainer>
        </Route>
        <Route exact path={'/cart'}>
          <NavBarContainer>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu"/>
            <Title2>
              Meu carrinho
            </Title2>
          </NavBarContainer>
        </Route>
        <Route exact path={'/profile'}>
          <NavBarContainer>
            <Title2>
              Meu Perfil
            </Title2>
            </NavBarContainer>
        </Route>
        <Route exact path={'/search'}>
          <NavBarContainer>
            <IconButton onClick={() => goBack(history)} className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon  />
            </IconButton>
            <Title>
              Buscar
            </Title>
          </NavBarContainer>
        </Route>
        <Route>
          <NavBarContainer>
            <IconButton onClick={() => goBack(history)} className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon  />
            </IconButton>
            <Title>
              FutureEats
            </Title>
          </NavBarContainer>
        </Route>
      </Switch>
    </div>
  );
}

export default NavBar