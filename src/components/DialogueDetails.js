import React, {Component} from "react";
import {connect} from "react-redux";
import Dialogue from "./Dialogue";
import AddDialogue from "./AddDialogue";

class DialogueDetails extends Component {
    state = {
        text: ""
    }

    render() {
        const {id, replies} = this.props;
        return (
            <div>
                <Dialogue id={id}/>
                <AddDialogue id={id}/>
                {replies.length !== 0 && <h3 className='center'>Replies</h3>}
                <ul>
                    {replies.map((replyId) => (
                        <li key={replyId}>
                            <Dialogue id={replyId}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({authedUser, dialogues, users}, props) {
    const {id} = props.match.params;
    const replies = dialogues[id] ? dialogues[id].replies.sort((first, second) => dialogues[second].timestamp - dialogues[first].timestamp) : [];
    return {id, replies};
}

export default connect(mapStateToProps)(DialogueDetails);