import React, {useContext, useState, useEffect} from "react";
import { auth } from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp (email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function signIn (email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user logged in', user);
                setCurrentUser(user);
                setLoading(false);
            } else {
                console.log('user not logged in');
                setCurrentUser(null);
            }
        });

        return unsubscribe;
    }, [])

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
