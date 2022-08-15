
import style from "./AuthPageStyle.module.css";
import BackgroundScreen from "../../components/UI/BackgroundScreen";
import LoginLayout from "../../components/auth/LoginLayout";
import useHttp from "../../hooks/use-http";
import { login } from "../../services/auth-api";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { Snackbar } from "@material-ui/core";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const LoginPage = () => {
    const history = useHistory();
    const authContext = useContext( AuthContext );
    const { sendRequest, status, data: authData, error } = useHttp( login );

    const loginHandler = ( inputData ) => {
        sendRequest( inputData );
    };
    const handleClose = () => { };

    useEffect( () => {
        console.log( status );
        if ( status === 'completed' && !error && authData )
        {
            const expireTime = new Date( new Date().getTime() + ( +authData.expiresIn * 1000 ) );
            authContext.loginMethod( authData.idToken, expireTime.toISOString() );
            history.replace( '/home' );
        }
    }, [ status, authContext, history, error, authData ] );

    return (
        <div className={ style.container }>
            { status === 'pending' ? <div className="centered"><LoadingSpinner /></div> : <div className={ style.child }>
                <LoginLayout onLogin={ loginHandler } />
            </div> }

            <div className={ style.background }>
                <BackgroundScreen lable="Sign in to Name" />
            </div>
            <Snackbar open={ error != null } autoHideDuration={ 1000 } onClose={ handleClose } message={ error } anchorOrigin={ {
                'vertical': 'bottom',
                'horizontal': 'left',
            } }
            >
            </Snackbar>
        </div >
    );
};

export default LoginPage;