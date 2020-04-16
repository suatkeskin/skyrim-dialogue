import {showLoading, hideLoading} from "react-redux-loading-bar";
import {saveLikeToggle, saveDialogue, playDialogue} from "../utils/api";

export const RECEIVE_DIALOGUES = "RECEIVE_DIALOGUES";
export const TOGGLE_DIALOGUE = "TOGGLE_DIALOGUE";
export const SET_PLAYING_AUDIO_URL = "SET_PLAYING_AUDIO_URL";
export const ADD_DIALOGUE = "ADD_DIALOGUE";

export function receiveDialogues(dialogues) {
    return {
        type: RECEIVE_DIALOGUES,
        dialogues
    }
}

function toggleDialogue({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_DIALOGUE,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleDialogue(info) {
    return (dispatch) => {
        dispatch(toggleDialogue(info));
        return saveLikeToggle(info).catch((e) => {
            console.warn("Error in handleToggleDialogue: ", e);
            dispatch(toggleDialogue(info));
            alert("There was an error liking the dialogue. Try again.");
        });
    }
}

function addDialogue(dialogue) {
    return {
        type: ADD_DIALOGUE,
        dialogue
    }
}

export function handleAddDialogue(text, replyingTo) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return saveDialogue({text, author: authedUser, replyingTo}).then((dialogue) => dispatch(addDialogue(dialogue))).then(() => dispatch(hideLoading()));
    }
}

function setPlayingAudioUrl(audioURL) {
    return {
        type: SET_PLAYING_AUDIO_URL,
        audioURL
    }
}

export function handlePlayDialogueAudio(audioURL) {
    return (dispatch) => {
        dispatch(setPlayingAudioUrl(audioURL));
        return playDialogue(audioURL).then(() => {
            dispatch(setPlayingAudioUrl(null));
        });
    }
}