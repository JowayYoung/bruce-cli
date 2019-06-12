import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";
import Page from "./templates/page.hbs";

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line

document.getElementById("root").innerHTML = Page({
	logo: ImgLogo,
	page: "index"
});