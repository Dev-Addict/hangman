import React, {Component} from "react";
import {connect} from 'react-redux';

import {startGame} from "../actions";
import '../style/Components/Reset.css';

class Reset extends Component{
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() {
        this.props.startGame();
    }

    render() {
        return (
            <div className="reset-reset" onClick={this.resetGame}>
                Reset
            </div>
        );
    }
}

export default connect(null, {startGame})(Reset);