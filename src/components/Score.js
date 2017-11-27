import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div className="score-box">
                <div className="small-row">
                    <div className="small-hole"></div>
                    <div className="small-hole"></div>
                </div>
                <div className="small-row">
                    <div className="small-hole"></div>
                    <div className="small-hole"></div>
                </div>
            </div>
        );
    }
}

export default Score;