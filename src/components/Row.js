import React, { Component } from 'react';

// Components
import Holes from './Holes';
import Score from './Score';
import Check from './Check';

class Row extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <Holes 
                        holes={this.props.row}
                        colorChange={this.props.colorChange}
                        style={this.props.style}
                        rowStatus={this.props.rowStatus}
                    />

                    <Score 
                        score={this.props.score} 
                    />

                    <Check 
                        check={this.props.check}
                        display={this.props.display}
                        disabled={this.props.row.some(({color}) => color === null)}
                    />
                </div>
            </div>
        );
    }
}

export default Row;