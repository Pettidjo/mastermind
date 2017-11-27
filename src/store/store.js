import {createStore, combineReducers} from "redux";
import {game} from "./game/game.reducer";

export const store = createStore(
    combineReducers({
        game: game
    })
)