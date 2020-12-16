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
import EditProfilePage from '../screens/EditProfilePage.js/EditProfilePage'
import LoadingPage from '../screens/LoadingPage/LoadingPage'
import SearchScreen from '../screens/SearchScreen/SearchScreen'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} >
                    <LoadingPage />
                </Route>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/signup'}>
                    <SignUpPage />
                </Route>
                <Route exact path={['/home']}>
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
                <Route exact path={'/editprofile'} >
                    <EditProfilePage />
                </Route>
                <Route exact path={'/search'}>
                    <SearchScreen />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;