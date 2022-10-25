import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app); 
const AuthProvider = ({children}) => {
    const [user , setUSer] = useState(null); 
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('use state changed', currentUser);
            setUSer(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    })
    // const user = {displayName : "Yennefer"};
   

    const createUSer = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth,  email, password);
    };
    const signInwithGoogle = (provider) => {
        signInWithPopup(auth, provider);
    };

    const signInwithGithub = (provider) =>{
        signInWithPopup(auth, provider);
    }
    const authInfo = { 
           user,
           createUSer,
           signInwithGoogle,
           signInwithGithub,
           signIn };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;