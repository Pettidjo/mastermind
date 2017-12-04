import {gameTypes} from './game.types';

export const check = () => {
    return {
        type: gameTypes.CHECK
    }
}

export const selectColor = () => {
    return {
        type: gameTypes.COLOR
    }
}
