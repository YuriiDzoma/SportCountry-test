import styles from './Header.module.scss'

const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
            <div><span>SportCountry</span></div>
            <div><span>Login</span></div>
        </div>
    )
}

export default Header;