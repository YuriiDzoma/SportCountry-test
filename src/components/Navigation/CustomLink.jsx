import  { Link } from "react-router-dom";
import styles from './Navigation.module.scss';
import {useLocation} from "react-router";

const CustomLink = ({children, to, ...props}) => {
    let location = useLocation();
    let activeLocation = location.pathname.substring(1,6) === to.substring(0,5);

    return (
        <Link
            to={to}
            className={activeLocation ? styles.customLink_active : styles.customLink}
            {...props}
        >
            {children}
        </Link>
    )
}

export {CustomLink};