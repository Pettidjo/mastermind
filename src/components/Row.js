import React, { Component } from 'react';

// Components
import Holes from './Holes';
import Score from './Score';
import Check from './Check';

class Row extends Component {

    state = {
        disabled: true
    }

    isNotNull = (currentValue) => {
        return currentValue.color === null || currentValue.color === undefined;
    }

    disabled = () => {
        if(this.props.row.some(this.isNotNull)) {
            this.setState({
                disabled: true
            })
        } else {
            this.setState({
                disabled: false
            })
        }
    }

    reset = () => {
        this.setState({
            disabled: !this.state.disabled
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Holes 
                        holes={this.props.row}
                        colorChange={this.props.colorChange}
                        style={this.props.style}
                        rowStatus={this.props.rowStatus}
                        test={this.disabled}
                    />

                    <Score 
                        score={this.props.score} 
                    />

                    <Check 
                        check={this.props.check}
                        display={this.props.display}
                        disabled={this.state.disabled}
                        reset={this.reset}
                    />
                </div>
            </div>
        );
    }
}

export default Row;