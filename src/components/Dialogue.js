import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {TiArrowBackOutline, TiHeartFullOutline, TiHeartOutline, TiMediaPlay, TiMediaPause} from "react-icons/ti"
import {formatDate, formatDialogue} from "../utils/helpers";
import {handleToggleDialogue, handlePlayDialogueAudio} from "../actions/dialogues";

class Dialogue extends Component {

    handleLike = (e) => {
        e.preventDefault();
        const {dispatch, dialogue, authedUser} = this.props;
        dispatch(handleToggleDialogue({id: dialogue.id, hasLiked: dialogue.hasLiked, authedUser}));
    }

    handlePlay = (e) => {
        e.preventDefault();
        const {dispatch, dialogue, playingAudioUrl} = this.props;
        if (playingAudioUrl || (playingAudioUrl && playingAudioUrl !== dialogue.audioURL)) {
            return;
        }
        dispatch(handlePlayDialogueAudio(dialogue.audioURL));
    }

    toParent = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/dialogue/${id}`);
    }

    render() {
        if (this.props.dialogue) {
            const {id, parent, text, timestamp, likes, replies, name, avatar, hasLiked, audioURL} = this.props.dialogue;
            return (
                <Link className='dialogue' to={`/dialogue/${id}`}>
                    <img className='avatar' src={avatar} alt={`Avatar of ${name}`}/>
                    <div className='dialogue-info'>
                        <div>
                            <span>{name}</span>
                            <div>{formatDate(timestamp)}</div>
                            {parent && (<button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>Replying to @{parent.author}</button>)}
                            <p>{text}</p>
                        </div>
                        <div className='dialogue-icons'>
                            <TiArrowBackOutline className='dialogue-icon'/>
                            <span>{replies !== 0 && replies}</span>
                            {
                                audioURL && (
                                    <button className='dialogue-button' onClick={this.handlePlay}>
                                        {this.props.playingAudioUrl ? <TiMediaPause className='dialogue-icon'/> : <TiMediaPlay className='dialogue-icon'/>}
                                    </button>
                                )
                            }
                            <button className='dialogue-button' onClick={this.handleLike}>
                                {hasLiked ? <TiHeartFullOutline className='dialogue-icon' color='#e0245e'/> : <TiHeartOutline className='dialogue-icon'/>}
                            </button>
                            <span>{likes !== 0 && likes}</span>
                        </div>
                    </div>
                </Link>
            );
        } else {
            return <p>This dialogue does not exist!</p>
        }
    }
}

function mapStateToProps({authedUser, users, dialogues, playingAudioUrl}, {id}) {
    let dialogue = dialogues[id];
    if (dialogue) {
        const parentDialogue = dialogues[dialogue.replyingTo];
        dialogue = formatDialogue(dialogue, users[dialogue.author], authedUser, parentDialogue);
    }
    return {authedUser, dialogue: dialogue, playingAudioUrl}
}

export default withRouter(connect(mapStateToProps)(Dialogue));