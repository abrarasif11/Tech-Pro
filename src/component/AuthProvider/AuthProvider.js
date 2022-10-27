import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../../firebase/Firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app); 
const AuthProvider = ({children}) => {
    const [user , setUSer] = useState(null); 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('use state changed', currentUser);
            setUSer(currentUser)
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    })
    // const user = {displayName : "Yennefer"};
   

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true)

        signInWithEmailAndPassword(auth,  email, password);
    };
    const signInwithGoogle = (provider) => {
        signInWithPopup(auth, provider);
    };

    const signInwithGithub = (provider) =>{
        signInWithPopup(auth, provider);

       
    }
    const logOut = () => {
        setLoading(true)

        signOut(auth);
    };
    
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser).then(() => {
            toast.success('Please check your email verification mail') 
        });
    }
    const updateUserProfile = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photoURL,
        })
        .then(() => {
            console.log("Profile Created");
        })
        .catch((error) => console.error(error));
    };
    const authInfo = { 
           loading,
           user,
           createUser,
           signInwithGoogle,
           signInwithGithub,
           signIn,
           logOut,
           updateUserProfile
         };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;