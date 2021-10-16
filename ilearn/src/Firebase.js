import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDqX3T8BJbFP_t5Ywg-6DG-wmgNAFLu_N4",
  authDomain: "ilearn-ac962.firebaseapp.com",
  projectId: "ilearn-ac962",
  storageBucket: "ilearn-ac962.appspot.com",
  messagingSenderId: "652851322934",
  appId: "1:652851322934:web:caeb4b3fe86c3632477897"
}).auth();