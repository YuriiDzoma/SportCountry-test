import styles from './Login.module.scss'


const Login = () => {
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.title}>
                <span>Login</span>
            </div>
            <div>
                <input placeholder={'login'} />
            </div>
            <div>
                <input placeholder={'password'} />
            </div>
            <div className={styles.signIn}>
                <button>Sign in</button>
            </div>
            <div className={styles.signInGoogle}>
                <button>Sign In With Google</button>
            </div>

        </div>
    )
}

export default Login