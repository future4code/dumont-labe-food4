export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA"

export const axiosConfig = {
    headers: { auth: window.localStorage.getItem("token") },
  }; 
