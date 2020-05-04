import React from "react";

import "./index.scss";

interface IProps {
	done?: string;
}

function Demo(props: IProps): JSX.Element {
	return <div className="demo-component">Demo Component {props.done}</div>;
}

Demo.defaultProps = {
	done: "Done"
};

export default Demo;