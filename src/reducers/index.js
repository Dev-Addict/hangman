import {combineReducers} from "redux";

import WordReducer from "./WordReducer";
import SelectedKeysReducer from "./SelectedKeysReducer";
import GameStateReducer from "./GameStateReducer";

export default combineReducers({
    word: WordReducer,
    selectedKeys: SelectedKeysReducer,
    gameState: GameStateReducer
});