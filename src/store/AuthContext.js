import { createContext, useState } from "react";

const AuthContext = createContext( {
    isAuth: false,
    token: '',
    loginMethod: ( data ) => { },
    signupMethod: ( data ) => { },
    forgetPasswordMethod: ( email ) => { },
    logoutMethod: () => { }
} );

const calRemainingTime = ( expirationTime ) => {
    const currentTime = new Date().getTime();
    const adjExpireationTime = new Date( expirationTime ).getTime();
    return adjExpireationTime - currentTime;
};

export const AuthProvider = ( props ) => {
    const initialToken = localStorage.getItem( 'token' );
    const [ token, setToken ] = useState( initialToken );
    const isloggedIn = !!token;

    const logout = () => {
        setToken( null );
        localStorage.removeItem( 'token' );
    };
    const login = ( token, expireTokenTime ) => {
        setToken( token );
        localStorage.setItem( 'token', token );

        const remainingTime = calRemainingTime( expireTokenTime );
        setTimeout( logout, remainingTime );
    };
    const forgetPassword = ( email ) => {
    };


    const context = {
        isAuth: isloggedIn,
        token: token,
        loginMethod: login,
        signupMethod: signup,
        forgetPasswordMethod: forgetPassword,
        logoutMethod: logout
    };

    return (
        <AuthContext.Provider value={ context }>
            { props.children }
        </AuthContext.Provider>
    );
};

export default AuthContext;