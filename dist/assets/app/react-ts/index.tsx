import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";
import About from "./views/about";
import Home from "./views/home";

interface ParamsType {
	isActive: boolean
}

function App(): JSX.Element {
	return (
		<div className="main-page pr">
			<h1 className="title tac">
				<span className="title-text gradient-color">bruce-app</span>
				<img className="title-icon" src={ImgLogo} />
			</h1>
			<BrowserRouter>
				<nav className="nav">
					<NavLink className={({ isActive }: ParamsType): string => `nav-item${isActive ? " active" : ""}`} to="/">Home</NavLink>
					<NavLink className={({ isActive }: ParamsType): string => `nav-item${isActive ? " active" : ""}`} to="/about">About</NavLink>
				</nav>
				<Routes>
					<Route element={<Home />} path="" />
					<Route element={<About />} path="about" />
				</Routes>
			</BrowserRouter>
			<a
				className="copyright abs-cx"
				href="https://yangzw.vip"
				rel="noreferrer"
				target="_blank"
			>Produced by @JowayYoung</a>
		</div>
	);
}

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV);

const container = document.getElementById("root");
!!container && createRoot(container).render(<App />);