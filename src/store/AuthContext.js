import { createContext, useState } from "react";

const AuthContext = createContext( {
    isAuth: false,
    loginMethod: ( data ) => { },
    signupMethod: ( data ) => { },
    forgetPasswordMethod: ( email ) => { },
} );

export function AuthProvider ( props ) {
    const [ isAuthState, setIsAuth ] = useState( false );
    const login = ( data ) => {
        setIsAuth( true );
    };
    const signup = ( data ) => {
        setIsAuth( true );
    };
    const forgetPassword = ( email ) => {

    };
    const logout = () => {
        setIsAuth( false );
    };
    const context = {
        isAuth: isAuthState,
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
}

export default AuthContext;