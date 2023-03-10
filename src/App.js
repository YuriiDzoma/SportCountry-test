import styles from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Training from "./components/Training/Training";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import Navigation from "components/Navigation/Navigation";


function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <HeaderContainer />
                <Navigation />
                <div>
                    <Routes>
                        <Route path='/' element={<>Home</>} />
                        <Route path='/profile/*' element={<ProfileContainer />} />
                        <Route path='/training/*' element={<Training />} />
                        <Route path='/users/*' element={<Users />} />
                        <Route path='/login/*' element={<Login />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
