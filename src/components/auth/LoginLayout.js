import style from "./LoginLayout.module.css";
import { Link } from "react-router-dom";
import TextFormField from "../UI/TextFormField";
import { CheckBox, EmailOutlined, LockOutlined } from "@material-ui/icons";
import Facebook from "../../assets/Facebook.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import { Button } from "@material-ui/core";
import SizedBox from "../UI/SizedBox";
import { useRef, useState } from "react";

const isEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const LoginLayout = ( { onLogin } ) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [ emailError, setEmailError ] = useState( '' );
    const [ passwordError, setPasswordError ] = useState( '' );

    const submit = ( event ) => {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        if ( !email.toLowerCase().match( isEmail ) )
        {
            setEmailError( 'Please Enter a valid email' );
            return;
        }
        if ( password.length < 7 )
        {
            setPasswordError( 'Please Enter more than 7 chars' );
            return;
        }
        const data = {
            email: email,
            password: password,
        };
        onLogin( data );
    };

    return (
        <div className={ style.container }>
            <span style={ { fontSize: "30px", paddingBottom: "10px" } }>Login</span>
            <span style={ { fontSize: "16px" } }>
                If you don’t have an account register
            </span>
            <span style={ { fontSize: "16px", paddingBottom: "1rem" } }>
                You can{ " " }
                <Link to="/signup" style={ { color: "rgba(0, 128, 128)", textDecoration: "none" } }>
                    Register here !
                </Link>
            </span>
            <form>
                <TextFormField
                    ref={ emailInputRef }
                    lable="Email"
                    helperText={ emailError }
                    icon={ <EmailOutlined /> }
                    placeHolder="Enter your email address"
                />
                <SizedBox />
                <TextFormField
                    ref={ passwordInputRef }
                    lable="Password"
                    type="password"
                    helperText={ passwordError }
                    icon={ <LockOutlined /> }
                    placeHolder="Enter your password"
                />
                <div className={ style.password }>
                    <div>
                        <CheckBox
                            style={ { fontSize: "20px", marginBottom: "-5px" } }
                            value="checkBox"
                            checked={ false }
                        />
                        <span style={ { fontSize: "0.7rem", paddingLeft: "0.5rem" } }>
                            Remember
                        </span>
                    </div>
                    <Link to="/login" style={ { textDecoration: "none" } }>
                        <span style={ { color: "rgba(0, 128, 128)", fontSize: "0.7rem" } }>Forget Password ?</span>
                    </Link>
                </div>
                <SizedBox />

                <Button
                    style={ {
                        width: "100%",
                        color: "white",
                        backgroundColor: "rgba(0, 128, 128)",
                        borderRadius: "2.5rem",
                    } }
                    onClick={ submit }
                >
                    Login
                </Button>
            </form>
            <span style={ { textAlign: "center", marginTop: "1rem" } }>
                or continue with
            </span>
            <div className={ style.wraper }>
                <a href="/">
                    <img className={ style.icon } src={ Facebook } alt="facebook" />
                </a>
                <a href="/">
                    <img className={ style.icon } src={ apple } alt="apple" />
                </a>

                <a href="/">
                    <img className={ style.icon } src={ google } alt="google" />
                </a>
            </div>
        </div>
    );
};
export default LoginLayout;