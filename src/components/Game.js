import React, { Component } from 'react';
import {connect} from 'react-redux';
import {check, selectColor} from '../store/game/game.actions';

// Components
import Row from './Row';

// class Game
class Game extends Component {

    selectColor = (holeToUpdate, color) => {
        holeToUpdate.color = color;
    }

    isDisabledCheck = () => {
        let checked = this.props.game.currentRow.map((actualRow, i) => 
            actualRow ? false : true
        )
        console.log(checked)
    }

    render() {
        return (
            <div className="main-panel">
                <h1 className="title">MasterMind</h1>
                <Row 
                    row={this.props.game.currentRow}
                    colorChange={this.selectColor}
                    check={this.props.check}
                    score={this.props.game.score}
                    isDisabled={this.isDisabledCheck()}
                />
            </div>
        );
    }
}

export default connect(mapToProps, bindAction)(Game);

function mapToProps(state) {
    return {
        game: state.game
    }
}

function bindAction(dispatch) {
    return {
        check: () => dispatch(check()),
        selectColor: () => dispatch(selectColor()),
    }
}