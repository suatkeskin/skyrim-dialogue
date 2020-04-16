import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {handleAddDialogue} from "../actions/dialogues";

class AddDialogue extends Component {
    state = {
        text: '',
        toHome: false
    }

    handleChange = (e) => {
        e.preventDefault();
        const text = e.target.value;
        this.setState(() => ({text}));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state;
        const {dispatch, id} = this.props;
        dispatch(handleAddDialogue(text, id));
        this.setState(() => ({text: '', toHome: !id}));
    }

    render() {
        const {text, toHome} = this.state;
        if (toHome) {
            return <Redirect to='/'/>;
        }
        const characterLeft = 280 - text.length;
        return (
            <div>
                <h3 className='center'>Compose new Dialogue</h3>
                <form className='new-dialogue' onSubmit={this.handleSubmit}>
                    <textarea className='textarea' placeholder='What is happening?' value={text} maxLength={280} onChange={this.handleChange}/>
                    {characterLeft <= 100 && <div className='dialogue-length'>{characterLeft}</div>}
                    <button className='btn' type='submit' disabled={text === ''}>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddDialogue);