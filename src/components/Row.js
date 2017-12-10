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
                    />

                    <Score score={this.props.score} />
                    <Check check={this.props.check} isDisabled={this.props.isDisabled} display={this.props.display}/>
                </div>
            </div>
        );
    }
}

export default Row;