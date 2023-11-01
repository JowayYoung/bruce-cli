import React from "react";

import "./index.scss";

export default function Home() {
	return (
		<div className="home-view">
			<p className="home-desc">How to configure this <strong className="home-tag react">React</strong> project</p>
			<p className="home-desc">Please check the <a className="home-link gradient-color" href="https://jowayyoung.github.io/bruce/app" target="_blank" rel="noreferrer">bruce-app doc</a></p>
		</div>
	);
}