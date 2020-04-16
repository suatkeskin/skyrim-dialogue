import {combineReducers} from "redux";
import {loadingBarReducer} from "react-redux-loading-bar";
import authedUser from "./authedUser";
import users from "./users";
import {playingAudioUrl, dialogues} from "./dialogues";

export default combineReducers({authedUser, users, playingAudioUrl: playingAudioUrl, dialogues, loadingBar: loadingBarReducer});