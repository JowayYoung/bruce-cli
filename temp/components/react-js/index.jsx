import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

function Demo({ done }) {
	return <div className="demo-component">Demo Component {done}</div>;
}

Demo.propTypes = {
	done: PropTypes.string
};
Demo.defaultProps = {
	done: "Done"
};

export default Demo;