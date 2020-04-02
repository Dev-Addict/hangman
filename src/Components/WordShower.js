import React, {Component} from "react";
import {connect} from "react-redux";

import GameState from "../model/GameState";
import {selectGameState} from "../actions";
import '../style/Components/WordShower.css';

class WordShower extends Component{
    constructor(props) {
        super(props);
        this.renderWord = this.renderWord.bind(this);
    }

    renderWord() {
        if (this.props.gameState === GameState.playing) {
            let result = this.props.word.toUpperCase().split('').map(key => {
                if (this.props.selectedKeys.includes(key)) {
                    return key;
                }
                return ' _ ';
            });

            if (result.join('') === this.props.word.toUpperCase()) {
                this.props.selectGameState(GameState.win);
            }
            return result;
        }
        return this.props.word.toUpperCase();
    }

    render() {
        return (
            <div className="word-shower-container">
                {this.renderWord()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        word: state.word,
        selectedKeys: state.selectedKeys,
        gameState: state.gameState
    };
};

export default connect(mapStateToProps, {selectGameState})(WordShower);