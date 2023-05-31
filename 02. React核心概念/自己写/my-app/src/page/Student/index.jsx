import React from "react";
import ReactDOM from "react-dom/client";
import StudentList from "../../components/StudentList";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
async function getStudentList() {
  return await axios.get("/api/student/findAll").then((r) => r.data.data);
}
async function render() {
  root.render(<p>加载中...</p>);
  const stus = await getStudentList();
  root.render(<StudentList stus={stus} />);
}
render();
