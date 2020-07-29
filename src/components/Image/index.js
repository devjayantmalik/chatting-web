import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, classNames }) => {
  const url = process.env.PUBLIC_URL + "/images/" + src;

  return <img src={url} alt={alt} className={classNames} />;
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classNames: PropTypes.string,
};

Image.defaultProps = {
  alt: "",
  url: "",
  classNames: "",
};

export default Image;
