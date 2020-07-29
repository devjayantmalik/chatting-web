import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuDropDown = ({ title, titleUrl, children }) => {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <Link to={titleUrl} className="navbar-link">
        {title}
      </Link>
      <div className="navbar-dropdown">{children}</div>
    </div>
  );
};

const DropdownLink = ({ url, title }) => (
  <Link to={url} title={title} className="navbar-item">
    {title}
  </Link>
);

MenuDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  titleUrl: PropTypes.string,
  children: PropTypes.any,
};

MenuDropDown.defaultProps = {
  titleUrl: "#",
};

DropdownLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export { DropdownLink };
export default MenuDropDown;
