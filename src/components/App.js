import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import DialogueDetails from "./DialogueDetails";
import AddDialogue from "./AddDialogue";
import Nav from "./Nav";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        <Nav/>
                        {
                            this.props.authedUSer === null ? null : <div>
                                <Route exact path='/' component={Dashboard}/>
                                <Route exact path='/dialogue/:id' component={DialogueDetails}/>
                                <Route exact path='/dialogue/add/new' component={AddDialogue}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUSer}) {
    return {authedUSer}
}

export default connect(mapStateToProps)(App);