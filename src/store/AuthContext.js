import { createContext, useState } from "react";

let Timer;

const AuthContext = createContext( {
    isAuth: false,
    token: '',
    loginMethod: ( token, expireTokenTime ) => { },
    forgetPasswordMethod: ( email ) => { },
    logoutMethod: () => { }
} );

const calRemainingTime = ( expirationTime ) => {
    const currentTime = new Date().getTime();
    const adjExpireationTime = new Date( expirationTime ).getTime();
    const result = adjExpireationTime - currentTime;
    return result;
};

export const AuthProvider = ( props ) => {
    const initialToken = localStorage.getItem( 'token' );
    const [ token, setToken ] = useState( initialToken );
    const isloggedIn = !!token;

    const logout = () => {
        setToken( null );
        localStorage.removeItem( 'token' );
        if ( Timer )
        {
            clearTimeout( Timer );
        };
    };
    const login = ( token, expireTokenTime ) => {
        setToken( token );
        localStorage.setItem( 'token', token );

        const remainingTime = calRemainingTime( expireTokenTime );
        console.log( remainingTime );
        // setTimeout( logout, remainingTime );
    };
    const forgetPassword = ( email ) => {
    };

    const context = {
        isAuth: isloggedIn,
        token: token,
        loginMethod: login,
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