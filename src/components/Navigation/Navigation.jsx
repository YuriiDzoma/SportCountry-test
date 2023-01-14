import styles from './Navigation.module.scss'
import {CustomLink} from "./CustomLink";

const Navigation = () => {
    const navigation = {
        navbar: [
            {id: 1, title: 'Profile', url: 'profile/', logotype: ''},
            {id: 2, title: 'Training', url: 'training/', logotype: ''},
            {id: 3, title: 'Users', url: 'users/', logotype: ''},
        ]
    }

    return (
        <div className={styles.navigationWrapper}>
            {navigation.navbar.map((item)=> (
                <div key={item.id}>
                    <CustomLink to={item.url}><span>{item.title}</span></CustomLink>
                </div>
            ))}
        </div>
    )
}

export default Navigation;