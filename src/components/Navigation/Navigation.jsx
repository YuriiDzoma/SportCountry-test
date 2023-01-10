import styles from './Navigation.module.scss'
import {CustomLink} from "./CustomLink";

const Navigation = ({navigation}) => {

    return (
        <div className={styles.navigationWrapper}>
            {navigation.map((item)=> (
                <div key={item.id}>
                    <CustomLink to={item.url}><span>{item.title}</span></CustomLink>
                </div>
            ))}
        </div>
    )
}

export default Navigation;