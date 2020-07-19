import React from "react";
import PropTypes from "prop-types";
import Column from "./Column";

const Columns = ({ children, verticalCentered }) => {
  let classes = ["columns"];

  // Check for vertical centered
  if (verticalCentered) classes.push("is-vcentered");

  return <div className={classes.join(" ")}>{children}</div>;
};

Columns.propTypes = {
  verticalCentered: PropTypes.bool,
};

export { Column };
export default Columns;
