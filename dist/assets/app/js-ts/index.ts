import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV);

const img = document.getElementsByClassName("title-icon")[0];
img.setAttribute("src", ImgLogo);