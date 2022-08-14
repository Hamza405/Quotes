
import style from "./AuthPageStyle.module.css";
import BackgroundScreen from "../../components/UI/BackgroundScreen";
import LoginLayout from "../../components/auth/LoginLayout";

const LoginPage = ( props ) => {
    return (
        <div className={ style.container }>
            <div className={ style.child }>
                <LoginLayout />
            </div>
            <div className={ style.background }>
                <BackgroundScreen lable="Sign in to Name" />
            </div>
        </div>
    );
};

export default LoginPage;