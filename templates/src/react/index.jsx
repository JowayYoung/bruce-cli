import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";
import About from "./views/about";
import Home from "./views/home";

function App() {
	return (
		<div className="main-page pr">
			<h1 className="title tac">
				<span className="title-text gradient-color">bruce-app</span>
				<img className="title-icon" src={ImgLogo} />
			</h1>
			<BrowserRouter>
				<nav className="nav">
					<NavLink className={({ isActive }) => `nav-item${isActive ? " active" : ""}`} to="/">Home</NavLink>
					<NavLink className={({ isActive }) => `nav-item${isActive ? " active" : ""}`} to="/about">About</NavLink>
				</nav>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
			<a className="copyright abs-cx" href="https://yangzw.vip" target="_blank" rel="noreferrer">Produced by @JowayYoung</a>
		</div>
	);
}

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV); // eslint-disable-line
const container = document.getElementById("root");
container && createRoot(container).render(<App />);