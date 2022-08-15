import style from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const MainNavigation = () => {
    const authContext = useContext( AuthContext );
    const logoutHandler = () => {
        console.log( authContext.isAuth );
        authContext.logoutMethod();
        console.log( authContext.isAuth );
    };

    return <header className={ style.header }>
        <div className={ style.logo }>My Quotes</div>
        <nav className={ style.nav }>
            <ul>
                <li><NavLink activeClassName={ style.active } to="/home/quotes">Quotes</NavLink></li>
                <li><NavLink activeClassName={ style.active } to="/home/new-quote">Add a Quote</NavLink></li>
                <li><NavLink onClick={ logoutHandler } activeClassName={ style.active } to="/login">Logout</NavLink></li>
            </ul>
        </nav>
    </header>;
};

export default MainNavigation;