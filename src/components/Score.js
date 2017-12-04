import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div className="score-box">
                <div className="small-row">
                    <div className="small-hole" style={{background: this.props.score[0].color}}></div>
                    <div className="small-hole" style={{background: this.props.score[1].color}}></div>
                </div>
                <div className="small-row">
                    <div className="small-hole" style={{background: this.props.score[2].color}}></div>
                    <div className="small-hole" style={{background: this.props.score[3].color}}></div>
                </div>
            </div>
        );
    }
}

export default Score;