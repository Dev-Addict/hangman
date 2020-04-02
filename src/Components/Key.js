import React, {Component} from "react";
import {connect} from 'react-redux';

import {selectKey} from "../actions";
import '../style/Components/Key.css';

class Key extends Component {
    constructor(props) {
        super(props);
        this.onKeyClicked = this.onKeyClicked.bind(this);
    }

    onKeyClicked() {
        if (this.props.show) {
            this.props.selectKey(this.props.word);
        }
    }

    render() {
        return (
            <div
                className={`key-container ${this.props.show ? '' : this.props.inWord ? 'key-show-in' : 'key-show-out'}`}
                onClick={this.onKeyClicked}
                key={this.props.key}>
                <div className="key-key">
                    {this.props.word}
                </div>
            </div>
        );
    }
}

export default connect(null, {selectKey})(Key);