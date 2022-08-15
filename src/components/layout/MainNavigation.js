import style from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    return <header className={ style.header }>
        <div className={ style.logo }>My Quotes</div>
        <nav className={ style.nav }>
            <ul>
                <li><NavLink activeClassName={ style.active } to="/home/quotes">Quotes</NavLink></li>
                <li><NavLink activeClassName={ style.active } to="/home/new-quote">Add a Quote</NavLink></li>
                <li><NavLink activeClassName={ style.active } to="/login">Logout</NavLink></li>
            </ul>
        </nav>
    </header>;
};

export default MainNavigation;