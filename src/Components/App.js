import React, {Component} from 'react';
import {connect} from 'react-redux';

import KeyBoard from "./KeyBoard";
import Reset from "./Reset";
import WordShower from "./WordShower";
import HangMan from "./HangMan";
import GameState from "../model/GameState";
import'../style/Components/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.renderGameState = this.renderGameState.bind(this);
    }

    renderGameState() {
        if (this.props.gameState === GameState.playing) {
            return <KeyBoard/>
        }
        if (this.props.gameState === GameState.lost) {
            return <div className="app-lost">You Lost.</div>
        }
        return <div className="app-won">You Won.</div>
    }

    render() {
        return (
            <div className="app-container">
                <HangMan/>
                <WordShower/>
                {this.renderGameState()}
                <Reset/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameState: state.gameState
    };
};

export default connect(mapStateToProps)(App);
