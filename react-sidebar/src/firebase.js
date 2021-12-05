import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const app = initializeApp({
    apiKey: "AIzaSyDYt9-efhn4JjxI68DP7e52psBxfMJti0U",
    authDomain: "ilearn-development.firebaseapp.com",
    projectId: "ilearn-development",
    storageBucket: "ilearn-development.appspot.com",
    messagingSenderId: "19222820157",
    appId: "1:19222820157:web:ce10850d7dc547a1d00154"
});

export const auth = getAuth();
export const db = getFirestore();
export default app;