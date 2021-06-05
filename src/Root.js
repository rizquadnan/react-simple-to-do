import { auth } from "./api/firebase";
import { useEffect, useState } from "react";
import App from "./App";
import LoginPage from "./pages/Login";
import { useHistory } from "react-router";

function Root() {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribeListener = auth.onAuthStateChanged(function(user) {
      setLoggedIn(!!user)

      if (isLoggedIn) {
        history.replace('/list');
      } else {
        history.replace('/');
      }
    });

    return () => unsubscribeListener()
  })

  return isLoggedIn ? <App /> : <LoginPage />
}

export default Root;
