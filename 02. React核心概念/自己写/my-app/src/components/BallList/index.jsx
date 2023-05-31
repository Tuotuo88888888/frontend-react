import React, { Component } from "react";
import { getRandom } from "../../util";
import Ball from "./Ball";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfoes: [],
    };
    const timer = setInterval(() => {
      const info = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(50, 500),
        ySpeed: getRandom(50, 500),
        bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
          0,
          255
        )})`,
        width: getRandom(50, 150),
        height: getRandom(50, 150),
      };
      this.setState({
        ballInfoes: [...this.state.ballInfoes, info],
      });
      if (this.state.ballInfoes.length >= 10) {
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return this.state.ballInfoes.map((i, k) => <Ball key={k} {...i} />);
  }
}
