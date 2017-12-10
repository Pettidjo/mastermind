import React, { Component } from 'react';

class Check extends Component {

    render() {
        return (
            <div className="check-box" style={{display: this.props.display}}>
                <button
                className="check-btn" 
                onClick={this.props.check}
                disabled={this.props.isDisabled}
                >Check</button>
            </div>
        );
    }
}

export default Check;