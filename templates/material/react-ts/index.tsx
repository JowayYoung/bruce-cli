import React from "react";

import "./index.scss";

interface DemoType {
	done: string
}

export default function Demo({ done = "Done" }: DemoType): JSX.Element {
	return <div className="demo-component">Demo Component {done}</div>;
}