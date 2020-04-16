import React, {Component} from "react";
import {connect} from "react-redux";
import Dialogue from "./Dialogue";

class Dashboard extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({query: query.trim()}));
    }

    clearQuery = () => {
        this.updateQuery('');
    }

    render() {
        const {query} = this.state;
        const {dialogues} = this.props;
        let dialoguesToShow;

        if (query) {
            dialoguesToShow = Object.keys(dialogues).reduce((source, key) => {
                if (dialogues[key].text.toLowerCase().includes(query.toLowerCase())) {
                    source[key] = dialogues[key];
                }
                return source;
            }, {});
        } else {
            dialoguesToShow = dialogues;
        }
        const dialogueSize = Object.keys(dialogues).length;
        const filteredDialogueSize = Object.keys(dialoguesToShow).length;
        return (
            <div>
                {
                    dialogueSize !== 0 && <div className='list-dialogues-search'>
                        <input className='search-dialogue' type='text' placeholder='Search dialogue...' value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                }
                {
                    filteredDialogueSize !== dialogueSize && <div className='showing-dialogues'>
                        <span>Now showing {filteredDialogueSize} of {dialogueSize}</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                }
                <ul className='dashboardList'>
                    {
                        Object.keys(dialoguesToShow)
                            .sort((first, second) => dialoguesToShow[second].timestamp - dialoguesToShow[first].timestamp)
                            .map((id) => (
                                <li key={id}>
                                    <Dialogue id={id}/>
                                </li>
                            ))
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({dialogues}) {
    return {
        // dialogueIds: Object.keys(dialogues).sort((first, second) => dialogues[second].timestamp - dialogues[first].timestamp)
        dialogues
    }
}

export default connect(mapStateToProps)(Dashboard);