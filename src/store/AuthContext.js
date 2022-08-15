import { createContext, useState } from "react";

const AuthContext = createContext( {
    isAuth: false,
    token: '',
    loginMethod: ( data ) => { },
    signupMethod: ( data ) => { },
    forgetPasswordMethod: ( email ) => { },
    logoutMethod: () => { }
} );

export const AuthProvider = ( props ) => {
    const initialToken = localStorage.getItem( 'token' );
    const [ token, setToken ] = useState( initialToken );
    const isloggedIn = !!token;

    const login = ( token ) => {
        setToken( token );
        localStorage.setItem( 'token', token );
    };
    const signup = ( token ) => {
        setToken( token );
    };
    const forgetPassword = ( email ) => {

    };
    const logout = () => {
        setToken( null );
        localStorage.removeItem( 'token' );
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