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
    switch(action.type) {
        case gameTypes.COLOR:
            return {
                ...state,
                    currentRow: state.currentRow,
                    // checkBtn: verifiedBtn()
            }
        case gameTypes.CHECK:
            return {
                ...state,
                    currentRow: [{}, {}, {}, {}],
                    playedRows:[...state.playedRows, state.currentRow],
                    playedScore: [...state.playedScore, check(state.currentRow, state.soluceRow)],
                    victory: victory(check(state.currentRow, state.soluceRow))
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

// function verifiedBtn() {
//     this.state.currentRow.every(isTrue);
// }

function victory(score) {
    for(let i = 0; i < score.length; i++) {
        if(score.every(isAllRed)) {
            alert('you win');
            return true;
        } else {
            return false
        }
    }
}

function isAllRed(currentValue) {
    return currentValue.color === "red";
}