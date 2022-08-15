
import style from "./AuthPageStyle.module.css";
import BackgroundScreen from "../../components/UI/BackgroundScreen";
import LoginLayout from "../../components/auth/LoginLayout";
import useHttp from "../../hooks/use-http";
import { login } from "../../services/auth-api";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { Snackbar } from "@material-ui/core";

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
            authContext.loginMethod( authData.idToken );
            history.replace( '/home' );
        }
    }, [ status, authContext, history, error, authData ] );

    return (
        <div className={ style.container }>
            <div className={ style.child }>
                <LoginLayout onLogin={ loginHandler } />
            </div>
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