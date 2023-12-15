import React, { useState } from "react";

import "./index.scss";

export default function About(): JSX.Element {
	const [tab, setTab] = useState(0);
	const onToggle = (): void => setTab(state => state === 0 ? 1 : 0);
	return (
		<div className="about-view">
			{tab === 0 && <img className="about-qrcode" src="https://jowayyoung.github.io/static/bruce/qrcode-me.jpg" />}
			{tab === 1 && <img className="about-qrcode" src="https://jowayyoung.github.io/static/bruce/qrcode-us.jpg" />}
			<button className="about-btn center" onClick={onToggle}>查看{tab === 0 ? "公众号" : "微信"}</button>
		</div>
	);
}