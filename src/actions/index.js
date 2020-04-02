import {
    startGameActionType,
    selectWordActionType,
    selectKeyActionType,
    selectGameStateActionType
} from "./types";

export const startGame = () => {
    return {
        type: startGameActionType
    };
};

export const selectGameState = gameState => {
    return {
        type: selectGameStateActionType,
        payload: gameState
    };
};

export const selectKey = key => {
    return {
        type: selectKeyActionType,
        payload: key
    };
}