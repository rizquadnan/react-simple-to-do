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
