import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import imgUrl1 from "../../assets/1.jpg";
import imgUrl2 from "../../assets/2.jpg";
import imgUrl3 from "../../assets/3.jpg";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const imgUrlArr = [imgUrl1, imgUrl2, imgUrl3];
let index = 0;
let tempId = null;

function render() {
  root.render(<img src={imgUrlArr[index]} alt="" />);
}
function start() {
  stop();
  tempId = setInterval(() => {
    index = (index + 1) % imgUrlArr.length;
    render();
  }, 1000);
}
function stop() {
  clearInterval(tempId);
}

render();
start();

container.onmouseenter = function () {
  stop();
};

container.onmouseleave = function () {
  start();
};
