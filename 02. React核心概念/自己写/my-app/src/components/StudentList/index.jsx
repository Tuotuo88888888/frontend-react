import React, { Component } from "react";
import Student from "./Student";

export default class index extends Component {
  render() {
    return (
      <ul>
        {this.props.stus.map((i) => (
          <Student {...i} key={i.id} />
        ))}
      </ul>
    );
  }
}
