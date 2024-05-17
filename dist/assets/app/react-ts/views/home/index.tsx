import React from "react";

import "./index.scss";

export default function Home(): JSX.Element {
	return (
		<div className="home-view">
			<p className="home-desc">How to configure this <strong className="home-tag react">React</strong> project</p>
			<p className="home-desc">
				Please check the&nbsp;
				<a
					className="home-link gradient-color"
					href="https://jowayyoung.github.io/bruce/app"
					rel="noreferrer"
					target="_blank"
				>bruce-app doc</a>
			</p>
		</div>
	);
}