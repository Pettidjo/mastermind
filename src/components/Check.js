import React, { Component } from 'react';

class Check extends Component {
    render() {
        return (
            <div className="check-box">
                <button
                className="check-btn" 
                disabled>Check</button>
            </div>
        );
    }
}

export default Check;