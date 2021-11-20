import React, {useContext, useState, useEffect} from "react";
import auth from '../../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function signUp (email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        console.log('h');
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log('user logged in', user);
                setCurrentUser(user);
            } else {
                console.log('user not logged in');
                setCurrentUser(null);
            }
        });
        return () => unsubscribe();
    }, [])

    

    const value = {
        currentUser, 
        signUp
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}
