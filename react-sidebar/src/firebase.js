import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyDYt9-efhn4JjxI68DP7e52psBxfMJti0U",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = getAuth();
export default app;