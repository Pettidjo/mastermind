import React, { Component } from 'react';

// Component
import Peg from './Peg';

const colorMaster = ["blue", "red", "yellow", "green" , "cyan" , "pink"];

class Hole extends Component {
    openBox = () => {
        this.props.onSelect(this.props.hole);
    }

    clicOnHole = (color) => {
        this.props.colorChange(this.props.hole, color);
    }

    render() {
        return (
            <div 
            className={`hole ${this.props.style}`}
            onClick={this.props.rowStatus ? this.openBox : null }
            style={{backgroundColor: this.props.hole.color}}
            >
            { this.props.selected 
                ? <div className="color-box">
                    {
                        colorMaster.map((color ,i) => 
                        <Peg key={`peg-${i}`} 
                        color={color} 
                        selectColor={() => this.clicOnHole(color)}
                        />)
                    }
                </div> 
                 : null }
            </div>
        );
    }
}

export default Hole;