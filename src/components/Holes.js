import React, { Component } from 'react';

// Component
import Hole from './Hole';

class Holes extends Component {
    state = {
        currentHole: null,
    }

    select = (hole) => {
        this.props.test();
        this.state.currentHole ? this.setState({ currentHole: !hole}) : this.setState({currentHole: hole});
    }

    render() {
        return (
            <div className="holes">
                {
                  this.props.holes.map((actualHole, i) => 
                  <Hole key={`hole-${i}`}
                    style={this.props.style}
                    colorChange={this.props.colorChange}
                    hole={actualHole} 
                    selected={this.state.currentHole === actualHole} 
                    onSelect={this.select}
                    rowStatus={this.props.rowStatus}
                  />
                )
                }
                <div className="sep"></div>
            </div>
        );
    }
}

export default Holes;