import {AppStateType} from "./redux-store";

export const getNavigation = (state: AppStateType) => {
    return state.navigation.navbar;
}