import { gameTypes } from "./game.types";

const colorMaster = ["blue", "red", "yellow", "green" , "cyan" , "pink"];

const initialState = {
    currentRow: [{}, {}, {}, {}],
    playedRows: [],
    soluceRow: [ randomColor(colorMaster), randomColor(colorMaster), randomColor(colorMaster), randomColor(colorMaster) ],
    score: [{}, {}, {}, {}]
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
                ...state,
                    score: check(state.currentRow, state.soluceRow)
            }
        default:
            return state;
    }
}

function rand() {
    return Math.floor(Math.random() * 5 + 1);
}

function randomColor(colorMaster) {
    return {
        color: colorMaster[rand()]
    }
}

function check(currentRow, soluceRow) {
    
    const test = currentRow.map((actualColor, i) => 
        actualColor.color === soluceRow[i].color ? {color: "red"} : {color: "black"}
    )
    return test;
}