import {startGameActionType} from "../actions/types";
import wordList from 'word-list-json';

const getRandomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

export default (state = getRandomWord(), action) => {
    if (action.type === startGameActionType) {
        return getRandomWord();
    }
    return state;
};