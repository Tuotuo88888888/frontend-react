import React, { Component } from "react";
import "./Ball.css";

export default class Ball extends Component {
  constructor(props) {
    super(props);
    const { left = 0, top = 0, xSpeed, ySpeed, width = 100 } = this.props;
    this.state = {
      left,
      top,
      xSpeed,
      ySpeed,
      width,
    };
    const duration = 16;
    setInterval(() => {
      const xDis = (this.state.xSpeed * duration) / 1000;
      const yDis = (this.state.ySpeed * duration) / 1000;
      //根据速度，改变left和top值
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (
        newLeft >=
        document.documentElement.clientWidth - this.state.width
      ) {
        newLeft = document.documentElement.clientWidth - this.state.width;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }
      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (
        newTop >=
        document.documentElement.clientHeight - this.state.width
      ) {
        newTop = document.documentElement.clientHeight - this.state.width;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }
      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }

  render() {
    const { bg = "#f00" } = this.props;
    const { width, left, top } = this.state;
    return (
      <div
        className="ball-container"
        style={{
          width,
          backgroundColor: bg,
          left,
          top,
        }}
      ></div>
    );
  }
}
