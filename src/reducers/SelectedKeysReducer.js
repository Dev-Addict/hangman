import {selectKeyActionType, startGameActionType} from "../actions/types";

export default (state = [], action) => {
    if (action.type === selectKeyActionType) {
        return [...state, action.payload];
    }
    if (action.type === startGameActionType) {
        return [];
    }
    return state;
};