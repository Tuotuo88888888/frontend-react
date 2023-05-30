import Mock from "mockjs";

Mock.mock("/api/student/findAll", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      name: "庹得孝",
      email: "2646218690@qq.com",
      sex: true,
      birth: "2001",
    },
    {
      id: "2",
      name: "汪少",
      email: "wanglicong@apj.com",
      sex: false,
      birth: "2002",
    },
    {
      id: "3",
      name: "富贵哥",
      email: "foin@qq.com",
      sex: true,
      birth: "1999",
    },
  ],
});
