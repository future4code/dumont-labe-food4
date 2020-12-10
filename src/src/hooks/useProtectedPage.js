import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {goToLogin} from '../router/coordinator'

export const useProtectedPage = () => {

  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history)
    }
  }, [history]);
}