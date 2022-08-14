
import BackgroundScreen from "../../components/UI/BackgroundScreen";
import style from "./AuthPageStyle.module.css";
import SignupLayout from "../../components/auth/SignupLayout";
const SignupPage = ( props ) => {
    return (
        <div className={ style.container }>
            <div className={ style.child }>
                <SignupLayout />
            </div>
            <div className={ style.background }>
                <BackgroundScreen lable="Sign up to Name" />
            </div>
        </div>
    );
};

export default SignupPage;