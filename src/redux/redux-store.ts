import {combineReducers, legacy_createStore as createStore} from "redux";
import navigationReducer from "./navigation-reducer";
import profileReducer from "./profile-reducer";
import trainingReducer from "./training-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import {firebaseReducer} from "react-redux-firebase";


let rootReducers = combineReducers({
    navigation: navigationReducer,
    profile: profileReducer,
    training: trainingReducer,
    users: usersReducer,
    auth: authReducer,
    firebase: firebaseReducer,
});

type RootReducer = typeof rootReducers;
export type AppStateType = ReturnType<RootReducer>

let store = createStore(rootReducers);


// @ts-ignore
window.store = store;

export default store;
