import {RECEIVE_DIALOGUES, TOGGLE_DIALOGUE, SET_PLAYING_AUDIO_URL, ADD_DIALOGUE} from "../actions/dialogues";

export function playingAudioUrl(state = null, action) {
    if (action.type === SET_PLAYING_AUDIO_URL) {
        return action.audioURL;
    } else {
        return state;
    }
}

export function dialogues(state = {}, action) {
    if (action.type === RECEIVE_DIALOGUES) {
        return {
            ...state,
            ...action.dialogues
        }
    } else if (action.type === TOGGLE_DIALOGUE) {
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                likes: action.hasLiked ? state[action.id].likes.filter((uid) => uid !== action.authedUser) : state[action.id].likes.concat([action.authedUser])
            }
        }
    } else if (action.type === ADD_DIALOGUE) {
        const {dialogue} = action;
        let replyingTo = {};
        if (dialogue.replyingTo) {
            replyingTo = {
                [dialogue.replyingTo]: {
                    ...state[dialogue.replyingTo],
                    replies: state[dialogue.replyingTo].replies.concat([dialogue.id])
                }
            }
        }
        return {
            ...state,
            [action.dialogue.id]: action.dialogue,
            ...replyingTo
        }
    } else {
        return state;
    }
}