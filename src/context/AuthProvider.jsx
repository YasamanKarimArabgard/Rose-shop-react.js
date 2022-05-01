import React, { useState, createContext, useContext, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {

    const [Auth, setState] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('authState')) || false;
        setState(userData)
    }, []);

    useEffect(() => {
        const data = JSON.stringify(Auth);
        localStorage.setItem('authState', data)
    }, [Auth])

    return (
        <AuthContext.Provider value={Auth}>
            <AuthContextDispatcher.Provider value={setState}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
