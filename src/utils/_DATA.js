let users = {
    dragonborn: {
        id: "dragonborn",
        name: "Dragonborn",
        avatarURL: "https://vignette.wikia.nocookie.net/elderscrolls/images/4/4f/Dovahkiin_%28dragonborn%29.jpg/revision/latest?cb=20110831192724",
        dialogues: []
    },
    whiterun_hold_guard: {
        id: "whiterun_hold_guard",
        name: "Whiterun Hold Guard",
        avatarURL: "https://vignette.wikia.nocookie.net/elderscrolls/images/c/c0/Whiterun_Hold_Guard_Skyrim.png/revision/latest?cb=20141014115402",
        dialogues: []
    },
    // balgruuf_the_greater: {
    //     id: "balgruuf_the_greater",
    //     name: "Balgruuf The Greater",
    //     avatarURL: "http://images.uesp.net/0/00/SR-npc-Balgruuf_the_Greater.jpg",
    //     dialogues: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
    // },
    // kodlak_whitemane: {
    //     id: "kodlak_whitemane",
    //     name: "Kodlak Whitemane",
    //     avatarURL: "http://images.uesp.net/9/9c/SR-npc-Kodlak_Whitemane.jpg",
    //     dialogues: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
    // },
    // lydia: {
    //     id: "lydia",
    //     name: "Lydia",
    //     avatarURL: "http://images.uesp.net/6/68/SR-npc-Lydia.jpg",
    //     dialogues: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', '3km0v4hf1ps92ajf4z2ytg', 'njv20mq7jsxa6bgsqc97', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
    // }
}

let dialogues = {
    "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        text: "I can't believe it! You're... Dragonborn...",
        author: "whiterun_hold_guard",
        timestamp: 1518122597860,
        likes: ['dragonborn'],
        replies: ['8xf0y6ziy569dwrdd253nd'],
        replyingTo: null,
    },
    "8xf0y6ziy569dwrdd253nd": {
        id: "8xf0y6ziy569dwrdd253nd",
        text: "Dragonborn? What do you mean?",
        author: "dragonborn",
        timestamp: 1518122597860,
        likes: [],
        replies: ['8xf0y6ziy569ghlad964nd'],
        replyingTo: null,
    },
    "8xf0y6ziy569ghlad964nd": {
        id: "8xf0y6ziy569ghlad964nd",
        text: "In the very oldest tales, back when there still were dragons in Skyrim, the Dragonborn would slay dragons and steal their power. That's what you did, isn't it? Absorbed that dragon's power?",
        author: "whiterun_hold_guard",
        timestamp: 1518122597860,
        likes: [],
        replies: ['f7y9y6zkl769ghlad964nd', 'f7y9y6zkl95h5e00u964nd'],
        replyingTo: null,
    },
    "f7y9y6zkl769ghlad964nd": {
        id: "f7y9y6zkl769ghlad964nd",
        text: "I don't know what happened to me.",
        author: "dragonborn",
        timestamp: 1518122597860,
        likes: [],
        replies: ['f7y9y6zkl76996y7ast76t'],
        replyingTo: null,
    },
    "f7y9y6zkl76996y7ast76t": {
        id: "f7y9y6zkl76996y7ast76t",
        text: "There's only one way to find out. Try to Shout... that would prove it. According to the old legends, only the Dragonborn can Shout without training, the way the dragons do.",
        author: "whiterun_hold_guard",
        timestamp: 1518122597860,
        likes: [],
        replies: [],
        replyingTo: null,
    },
    "f7y9y6zkl95h5e00u964nd": {
        id: "f7y9y6zkl95h5e00u964nd",
        text: "I think you may be right.",
        author: "dragonborn",
        timestamp: 1518122597860,
        likes: [],
        replies: ['f7y9yhlk87rty677ast76t'],
        replyingTo: null,
    },
    "f7y9yhlk87rty677ast76t": {
        id: "f7y9yhlk87rty677ast76t",
        text: "There's only one way to find out. Try to Shout... According to the old legends, only the Dragonborn can Shout without training, the way the dragons do.",
        author: "whiterun_hold_guard",
        timestamp: 1518122597860,
        likes: [],
        replies: [],
        replyingTo: null,
    },
    "f709g7oy76sduy70fg564r": {
        id: "f709g7oy76sduy70fg564r",
        text: "My cousin is out fighting dragons, and what do I get? Guard duty.",
        author: "whiterun_hold_guard",
        timestamp: 1587051481205,
        likes: [],
        replies: [],
        replyingTo: null,
        audioURL: "https://vignette.wikia.nocookie.net/elderscrolls/images/3/31/Guard_Quote_General_5.ogg/revision/latest?cb=20161025160532"
    },
    "f709g7tl859luy70fg564r": {
        id: "f709g7tl859luy70fg564r",
        text: "Let me guess - someone stole your sweetroll...",
        author: "whiterun_hold_guard",
        timestamp: 1587063363217,
        likes: ['dragonborn'],
        replies: [],
        replyingTo: null,
        audioURL: "https://vignette.wikia.nocookie.net/elderscrolls/images/e/e8/Guard_Quote_General_3.ogg/revision/latest?cb=20161025160532"
    },
    "f709g7tl859ly677ast76t": {
        id: "f709g7tl859ly677ast76t",
        text: "I used to be an adventurer like you. Then I took an arrow in the knee....",
        author: "whiterun_hold_guard",
        timestamp: 1587063495784,
        likes: ['dragonborn'],
        replies: [],
        replyingTo: null,
        audioURL: "https://vignette.wikia.nocookie.net/elderscrolls/images/e/ef/Guard_Quote_General_1.ogg/revision/latest?cb=20161025160531"
    }
}

export function _getUsers() {
    return new Promise((res) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getDialogues() {
    return new Promise((res) => {
        setTimeout(() => res({...dialogues}), 1000)
    })
}

export function _saveLikeToggle({id, hasLiked, authedUser}) {
    return new Promise((res) => {
        setTimeout(() => {
            dialogues = {
                ...dialogues,
                [id]: {
                    ...dialogues[id],
                    likes: hasLiked === true
                        ? dialogues[id].likes.filter((uid) => uid !== authedUser)
                        : dialogues[id].likes.concat([authedUser])
                }
            }

            res()
        }, 500)
    })
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatDialogue({author, text, replyingTo = null}) {
    return {
        author,
        id: generateUID(),
        likes: [],
        replies: [],
        text,
        timestamp: Date.now(),
        replyingTo,
    }
}

export function _saveDialogue({text, author, replyingTo}) {
    return new Promise((res) => {
        const formattedDialogue = formatDialogue({
            text,
            author,
            replyingTo
        })

        setTimeout(() => {
            dialogues = {
                ...dialogues,
                [formattedDialogue.id]: formattedDialogue,
            }

            users = {
                ...users,
                [author]: {
                    ...users[author],
                    dialogues: users[author].dialogues.concat([formattedDialogue.id])
                }
            }

            res(formattedDialogue)
        }, 1000)
    })
}
