import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import AddressPage from '../screens/AddressPage/AddressPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import RestaurantPage from '../screens/RestaurantPage/RestaurantPage'
import CartPage from '../screens/CartPage/CartPage'
import ProfilePage from '../screens/ProfilePage/ProfilePage'
import {TextField, Button} from '@material-ui/core'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/signup'}>
                    <SignUpPage />
                </Route>
                <Route exact path={['/home', '/']}>
                    <FeedPage />
                </Route>
                <Route exact path={'/restaurant/:id'}>
                    <RestaurantPage />
                </Route>
                <Route exact path={'/profile'}>
                    <ProfilePage />
                </Route>
                <Route exact path={'/address'}>
                    <AddressPage />
                </Route>
                <Route exact path={'/cart'}>
                    <CartPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;