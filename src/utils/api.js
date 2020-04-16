import {
    _getUsers,
    _getDialogues,
    _saveLikeToggle,
    _saveDialogue,
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getDialogues(),
    ]).then(([users, dialogues]) => ({
        users,
        dialogues,
    }))
}

export function saveLikeToggle(info) {
    return _saveLikeToggle(info)
}

export function saveDialogue(info) {
    return _saveDialogue(info)
}

export function playDialogue(url) {
    return new Promise(function (resolve) {
        const audio = new Audio(url);
        audio.type = 'audio/wav';
        audio.addEventListener("ended", function () {
            return resolve();
        });
        try {
            audio.play();
        } catch (err) {
            console.log('Failed to play...' + err);
        }
    });
}