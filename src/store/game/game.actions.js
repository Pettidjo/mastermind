import {gameTypes} from './game.types';

export const check = () => {
    return {
        type: gameTypes.GAME_CHECK
    }
}

export const selectColor = () => {
    return {
        type: gameTypes.SELECT_COLOR
    }
}