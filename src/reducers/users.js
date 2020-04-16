import {RECEIVE_USERS} from "../actions/users";

export default function users(state = {}, action) {
    if (action.type === RECEIVE_USERS) {
        return {
            ...state,
            ...action.users
        }
    } else {
        return state;
    }
}