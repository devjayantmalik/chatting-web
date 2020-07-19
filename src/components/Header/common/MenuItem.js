import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ url, title }) => {
  let isActive = useLocation().pathname === url ? "is-active" : "";

  return (
    <li className={isActive}>
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
