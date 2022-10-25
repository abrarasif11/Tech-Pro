import React, { createContext } from 'react';
import {getAuth} from "firebase/auth"
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app); 
const AuthProvider = ({children}) => {
    const user = {displayName : "Yennefer"};
    
    const authInfo = { user };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;