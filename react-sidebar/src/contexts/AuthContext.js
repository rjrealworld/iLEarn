import React, {useContext, useState, useEffect} from "react";
import { auth } from '../firebase';
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    function signUp (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user logged in', user);
                setCurrentUser(user);
            } else {
                console.log('user not logged in');
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, [currentUser])

    const value = {
        currentUser, 
        signUp, 
        signIn
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
