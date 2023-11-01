import React from "react";

import "./index.scss";

interface ParamsType {
	action: string
}

export default function Demo({ action = "Done" }: ParamsType): JSX.Element {
	return <div className="demo-component">Demo Component {action}</div>;
}