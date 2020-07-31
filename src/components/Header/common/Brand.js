import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "../../Image";

const Brand = ({ url, logo }) => {
  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to={url}>
        {logo && <Image src={logo} alt="site logo" />}
      </Link>
      <span className="navbar-burger burger" data-target="navbarMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  );
};

Brand.propTypes = {
  url: PropTypes.string,
  logo: PropTypes.string,
};

Brand.defaultProps = {
  url: "",
};

export default Brand;
