import GameState from "../model/GameState";
import {
    startGameActionType,
    selectGameStateActionType
} from "../actions/types";

export default (state = GameState.playing, action) => {
    if (action.type === startGameActionType) {
        return GameState.playing;
    }
    if (action.type === selectGameStateActionType) {
        return action.payload;
    }
    return state;
};