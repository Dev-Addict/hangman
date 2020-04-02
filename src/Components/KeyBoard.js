import React, {Component} from "react";
import {connect} from "react-redux";

import Key from "./Key";
import {startGame} from "../actions";
import '../style/Components/KeyBoard.css';

export const keys = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

class KeyBoard extends Component {
    constructor(props) {
        super(props);
        this.renderKeys = this.renderKeys.bind(this);
    }

    renderKeys(begin, end) {
        let result = [];
        for (let i = begin; i < end; i++) {
            let key = keys[i];
            result.push(
                <Key word={key}
                     show={!this.props.selectedKeys.includes(key)}
                     key={key}
                     inWord={this.props.word.toUpperCase().includes(key)}/>
            );
        }
        return result
    }

    render() {
        return (
            <div className="key-board-container">
                <div className="key-board-row">
                    {this.renderKeys(0, 10)}
                </div>
                <div className="key-board-row">
                    {this.renderKeys(10, 20)}
                </div>
                <div className="key-board-row">
                    {this.renderKeys(20, keys.length)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedKeys: state.selectedKeys,
        word: state.word
    };
};

export default connect(mapStateToProps, {startGame})(KeyBoard);