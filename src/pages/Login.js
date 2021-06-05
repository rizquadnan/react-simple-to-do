import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { auth } from "../api/firebase";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: async () => false
  },
};

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    const unregisterObserver = auth.onAuthStateChanged((user) => {
      if (user) {
        history.replace('/list')
      }
    })

    return () => unregisterObserver() 
  }, [history])

  return (
    <div className={classes.login}>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={auth}
      />
    </div>
  );
}

export default LoginPage;
