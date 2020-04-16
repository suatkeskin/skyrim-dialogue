export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-TR')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatDialogue(dialogue, author, authedUser, parentDialogue) {
    const {id, likes, replies, text, timestamp, audioURL} = dialogue
    const {name, avatarURL} = author

    return {
        name,
        id,
        timestamp,
        text,
        avatar: avatarURL,
        likes: likes.length,
        replies: replies.length,
        hasLiked: likes.includes(authedUser),
        parent: !parentDialogue ? null : {
            author: parentDialogue.author,
            id: parentDialogue.id,
        },
        audioURL
    }
}