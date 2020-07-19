import React from "react";
import PropTypes from "prop-types";

const Column = ({ children, width, offset }) => {
  const classes = [];

  // Check for width parameter
  if (width) classes.push(`is-${width}`);

  // Check for offset parameter
  if (offset) classes.push(`is-offset-${offset}`);

  return <div className={`column ${classes.join(" ")}`}>{children}</div>;
};

Column.propTypes = {
  width: PropTypes.string,
  offset: PropTypes.string,
};

export default Column;
