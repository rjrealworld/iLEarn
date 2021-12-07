import React, {useContext, useState, useEffect} from "react";
import { auth } from '../firebase';
import {GoogleAuthProvider, updateProfile, signOut, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useHistory } from "react-router";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const history = useHistory();

    function updateProf(name) {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:
          "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg",
      });
    }

    function signUp (email, password, name) {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    function signIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn () {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function logOut() {
        history.push('/');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log('user logged in', user);
                setCurrentUser(user);
            } else {
                console.log('user not logged in');
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser, 
        signUp, 
        signIn,
        googleSignIn,
        logOut,
        updateProf,
        history,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
