import React, {Component} from 'react';

import KeyBoard from "./KeyBoard";
import Reset from "./Reset";
import WordShower from "./WordShower";
import'../style/Components/App.css';
import HangMan from "./HangMan";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <HangMan/>
                <WordShower/>
                <KeyBoard/>
                <Reset/>
            </div>
        );
    }
}

export default App;
