export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/signup')
}

export const goToFeed = (history) => {
    history.push("/home")
}

export const goToRestaurantDetails = (history, id) => {
    history.push(`/restaurant/${id}`)
}

export const goToProfile = (history) => {
    history.push('/profile')
}

export const goToAdress = (history) => {
    history.push('/address')
}

export const goToCart = (history) => {
    history.push('/cart')
}

export const goToEditProfile = (history) => {
    history.push('/editprofile')
}

export const logout = (history) => {
    window.localStorage.clear();
    history.push("/login");
}

export const goBack = (history) => {
    history.goBack()
}

export const goToSearch = (history) => {
    history.push('/search')
}
