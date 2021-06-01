import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3CJp2oD2mY7uNpL9H763rCx-z2TiL694",
  authDomain: "react-simple-todos.firebaseapp.com",
  databaseURL:
    "https://react-simple-todos-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-simple-todos",
  storageBucket: "react-simple-todos.appspot.com",
  messagingSenderId: "1077189647524",
  appId: "1:1077189647524:web:5d0dc0d044ac4520edda31",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();
const databaseRef = database.ref();

export { auth, database, databaseRef };

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
