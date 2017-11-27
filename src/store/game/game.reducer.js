import { gameTypes } from "./game.types";

const initialState = {
    currentRow: [{}, {}, {}, {}],
    playedRows: []
}

export const game = (state = initialState, action) => {
    switch(action.type) {
        case gameTypes.COLOR:
            return {
                ...state,
                    currentRow: state.currentRow
                
            }
        case gameTypes.CHECK:
            return {

            }
        default:
            return state;
    }
}