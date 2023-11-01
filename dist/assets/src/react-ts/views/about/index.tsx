import React, { useState } from "react";

import "./index.scss";

export default function About(): JSX.Element {
	const [tab, setTab] = useState(0);
	const onToggle = (): void => setTab(state => state === 0 ? 1 : 0);
	return (
		<div className="about-view">
			{tab === 0 && <img className="about-qrcode" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bcc13d83524f9eb8a61a1cab0543af~tplv-k3u1fbpfcp-watermark.image" />}
			{tab === 1 && <img className="about-qrcode" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9a7e606f0ca4cf58c2262f6c16e3464~tplv-k3u1fbpfcp-watermark.image" />}
			<button className="about-btn center" onClick={onToggle}>查看{tab === 0 ? "公众号" : "微信"}</button>
		</div>
	);
}