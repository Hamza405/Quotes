import { createContext, useState } from "react";

const AuthContext = createContext( {
    isAuth: false,
    token: '',
    loginMethod: ( data ) => { },
    signupMethod: ( data ) => { },
    forgetPasswordMethod: ( email ) => { },
} );

export const AuthProvider = ( props ) => {
    const [ isAuthState, setIsAuth ] = useState( false );
    const [ token, setToken ] = useState( '' );
    const login = ( token ) => {
        setIsAuth( true );
        setToken( token );
    };
    const signup = ( token ) => {
        setIsAuth( true );
        setToken( token );
    };
    const forgetPassword = ( email ) => {

    };
    const logout = () => {
        setIsAuth( false );
    };
    const context = {
        isAuth: isAuthState,
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