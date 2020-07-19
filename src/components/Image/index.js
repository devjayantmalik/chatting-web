import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt }) => {
  const url = process.env.PUBLIC_URL + "/images/" + src;

  return <img src={url} alt={alt} />;
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: "",
  url: "",
};

export default Image;
