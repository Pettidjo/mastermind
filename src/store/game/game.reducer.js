import { gameTypes } from "./game.types";

const colorMaster = ["blue", "red", "yellow", "green" , "cyan" , "pink"];

const initialState = {
    soluceRow: [ randomColor(colorMaster), randomColor(colorMaster), randomColor(colorMaster), randomColor(colorMaster) ],
    currentRow: [{}, {}, {}, {}],
    playedRows: [],
    score: [{}, {}, {}, {}],
    playedScore: [],
    checkBtn: false,
    victory: false
}

export const game = (state = initialState, action) => {
    console.log(state.score);
    console.log(state.soluceRow);
    switch(action.type) {
        case gameTypes.COLOR:
            return {
                ...state,
                    currentRow: state.currentRow,
                    checkBtn: verifiedBtn()
            }
        case gameTypes.CHECK:
            return {
                ...state,
                    currentRow: [{}, {}, {}, {}],
                    playedRows:[...state.playedRows, state.currentRow],
                    playedScore: [...state.playedScore, check(state.currentRow, state.soluceRow)],
                    victory: victory(state.playedScore)
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
    const checkedScore = currentRow.map((actualColor, i) => {
        if(actualColor.color === soluceRow[i].color) {
            return {
                color: "red"
            }
        } else if ((actualColor.color !== soluceRow[i].color) && (search(actualColor.color, soluceRow)) ) {
            return {
                color: "black"
            }
        } else {
            return {
                color: ""
            }
        }
    })

    return checkedScore;
}

function search(nameKey, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].color === nameKey) {
            return true;
        }
    }
}

function isTrue(currentValue) {
    return currentValue === "red";
}

function verifiedBtn() {
    this.state.currentRow.every(isTrue);
}

function victory(score) {
    console.log(score[0]);
    // score ? console.log(score[score.length - 1].every(isTrue)) : false
}