import React, { Component } from 'react';


class Peg extends Component {
    
    select = () => {
        this.props.selectColor(this.props.color)
    }

    render() {
      return <div className="point" onClick={this.select} style={{backgroundColor: this.props.color}}/>
    }
  }

export default Peg;