import React, {Component, createRef} from "react";
import {connect} from 'react-redux';

import GameState from "../model/GameState";
import {selectGameState} from "../actions";

class HangMan extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = createRef();
        this.showMan = this.showMan.bind(this);
        this.showMan0 = this.showMan0.bind(this);
        this.showMan1 = this.showMan1.bind(this);
        this.showMan2 = this.showMan2.bind(this);
        this.showMan3 = this.showMan3.bind(this);
        this.showMan4 = this.showMan4.bind(this);
        this.showMan5 = this.showMan5.bind(this);
        this.showMan6 = this.showMan6.bind(this);
        this.showSad = this.showSad.bind(this);
    }

    showMan() {
        this.ctx.clearRect(0,0,this.canvasRef.current.width, this.canvasRef.current.height);
        if (this.props.gameState === GameState.lost) {
            for (let i = 0; i <= this.props.wrongTimes; i++) {
                this.sadManParts[i]();
            }
        } else {
            for (let i = 0; i <= this.props.wrongTimes; i++) {
                this.manParts[i]();
            }
        }
    }

    showMan0() {
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.ctx.fillRect(9, 269, 282, 22);
        this.ctx.fillRect(39, 29, 22, 242);
        this.ctx.fillRect(39, 29, 202, 22);
        this.ctx.beginPath();
        this.ctx.moveTo(40, 129);
        this.ctx.lineTo(40, 151);
        this.ctx.lineTo(151, 40);
        this.ctx.lineTo(129, 40);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.fillRect(199, 39, 22, 52);
        this.ctx.fillStyle = 'rgb(0,216,214)';
        this.ctx.fillRect(10, 270, 280, 20);
        this.ctx.fillRect(40, 30, 20, 240);
        this.ctx.fillRect(40, 30, 200, 20);
        this.ctx.beginPath();
        this.ctx.moveTo(40, 130);
        this.ctx.lineTo(40, 150);
        this.ctx.lineTo(150, 40);
        this.ctx.lineTo(130, 40);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.fillRect(200, 40, 20, 50);
    }

    showMan1() {
        this.ctx.strokeStyle = 'rgb(15, 188, 249)';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.arc(210, 115, 25, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.arc(210, 115, 15, 0, Math.PI, false);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(203, 110, 5, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(217, 110, 5, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    showMan2() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 12;
        this.ctx.moveTo(210, 140);
        this.ctx.lineTo(210, 150);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.lineWidth = 36;
        this.ctx.moveTo(210, 150);
        this.ctx.lineTo(210, 205);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    showMan3() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 12;
        this.ctx.moveTo(195, 155);
        this.ctx.lineTo(150, 190);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    showMan4() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 12;
        this.ctx.moveTo(225, 155);
        this.ctx.lineTo(270, 190);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    showMan5() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 16;
        this.ctx.moveTo(200, 205);
        this.ctx.lineTo(200, 250);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    showMan6() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 16;
        this.ctx.moveTo(220, 205);
        this.ctx.lineTo(220, 250);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    showSad() {
        this.ctx.strokeStyle = 'rgb(15, 188, 249)';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.arc(210, 115, 25, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.arc(210, 135, 15, 110, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(203, 110, 5, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(217, 110, 5, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.manParts = [
            this.showMan0,
            this.showMan1,
            this.showMan2,
            this.showMan3,
            this.showMan4,
            this.showMan5,
            this.showMan6
        ];
        this.sadManParts = [
            this.showMan0,
            this.showSad,
            this.showMan2,
            this.showMan3,
            this.showMan4,
            this.showMan5,
            this.showMan6
        ];
        if (this.props.wrongTimes === 6) {
            this.props.selectGameState(GameState.lost);
        }
        this.showMan();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.wrongTimes === 6) {
            this.props.selectGameState(GameState.lost);
        }
        this.showMan();
    }

    render() {
        return (
            <canvas ref={this.canvasRef} width={400} height={300}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        wrongTimes: [...state.selectedKeys]
            .filter(key =>
                !state.word
                    .toUpperCase()
                    .split('')
                    .includes(key))
            .length,
        gameState: state.gameState
    };
};

export default connect(mapStateToProps, {selectGameState})(HangMan);