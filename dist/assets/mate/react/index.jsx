import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Demo({ action = "Done" } = {}) {
	return <div className="demo-component">Demo Component {action}</div>;
}

Demo.propTypes = {
	action: PropTypes.string
};