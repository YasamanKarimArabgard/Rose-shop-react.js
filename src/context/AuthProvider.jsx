import React, { useState, createContext, useContext } from 'react';

export const AuthContext = createContext();
export const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {

    const [state, setState] = useState();
    return (
            <AuthContext.Provider value={state}>
                <AuthContextDispatcher.Provider value={setState}>
                    {children}
                </AuthContextDispatcher.Provider>
            </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
