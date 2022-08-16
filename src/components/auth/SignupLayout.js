import style from "./SignupLayout.module.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { EmailOutlined, LockOutlined } from "@material-ui/icons";
import TextFormField from "../UI/TextFormField";
import SizedBox from "../UI/SizedBox";
import { useRef, useState } from "react";

const isEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const SignupLayout = ( props ) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const [ emailError, setEmailError ] = useState( '' );
    const [ passwordError, setPasswordError ] = useState( '' );
    const [ confirmPasswordError, setConfirmPasswordError ] = useState( '' );


    const submit = ( event ) => {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const confirmPassword = confirmPasswordInputRef.current.value;

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
        if ( password !== confirmPassword )
        {
            setConfirmPasswordError( 'Please check yoour password!' );
            return;
        }

        const data = {
            email: email,
            password: password,
        };
        props.onSignup( data );
    };

    return (
        <div className={ style.container }>
            <span style={ { fontSize: "30px", paddingBottom: "10px" } }>Sign up</span>
            <span style={ { fontSize: "16px" } }>
                If you already have an account register
            </span>
            <span style={ { fontSize: "16px", paddingBottom: "1rem" } }>
                You can{ " " }
                <Link to="/login" style={ { color: "rgba(0, 128, 128)", textDecoration: "none" } }>
                    login here !
                </Link>
            </span>
            <form>
                <TextFormField
                    ref={ emailInputRef }
                    lable="Email"
                    helperText={ emailError }
                    icon={ <EmailOutlined /> }
                    placeHolder="Enter your email"
                />
                <SizedBox />
                {/* <TextFormField
                    ref={ userNameInputRef }
                    lable="User Name"
                    icon={ <Person /> }
                    placeHolder="Enter your User name"
                />
                <SizedBox /> */}
                <TextFormField
                    ref={ passwordInputRef }
                    lable="Password"
                    type="password"
                    helperText={ passwordError }
                    icon={ <LockOutlined /> }
                    placeHolder="Enter your password"
                />
                <SizedBox />
                <TextFormField
                    ref={ confirmPasswordInputRef }
                    lable="Confrim Password"
                    type="password"
                    helperText={ confirmPasswordError }
                    icon={ <LockOutlined /> }
                    placeHolder="Confrim your password"
                />
                <SizedBox size="2" />
                <Button
                    style={ {
                        width: "100%",
                        color: "white",
                        backgroundColor: "rgba(0, 128, 128)",
                        borderRadius: "2.5rem",
                    } }
                    onClick={ submit }
                >
                    Register
                </Button>
            </form>
        </div>
    );
};
export default SignupLayout;