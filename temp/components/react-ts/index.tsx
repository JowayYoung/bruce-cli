import React, { Component } from "react";

import "./index.scss";

interface IProps {
	done?: string;
}

export default class Demo extends Component<IProps> {
	public static defaultProps: IProps = {
		done: "Done"
	};
	public render(): JSX.Element {
		return <div className="demo-component">Demo Component {this.props.done}</div>;
	}
}