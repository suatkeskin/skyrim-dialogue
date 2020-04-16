import {showLoading, hideLoading} from "react-redux-loading-bar";
import {getInitialData} from "../utils/api";
import {receiveDialogues} from "./dialogues";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";

const AUTHED_USER_ID = "dragonborn";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, dialogues}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveDialogues(dialogues));
            dispatch(setAuthedUser(AUTHED_USER_ID));
            dispatch(hideLoading());
        });
    }
}