import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth"
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app); 
const AuthProvider = ({children}) => {
    const [user , setUSer] = useState(null); 
    // const user = {displayName : "Yennefer"};
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUSer = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = { user , createUSer };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;