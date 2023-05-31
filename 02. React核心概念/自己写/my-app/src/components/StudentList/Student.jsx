import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { name, email, sex, birth } = this.props;
    return (
      <li>
        【姓名】{name}， 【email】{email}， 【性别】
        {sex === 1 ? "男" : "女"}， 【出生年份】{birth}
      </li>
    );
  }
}
