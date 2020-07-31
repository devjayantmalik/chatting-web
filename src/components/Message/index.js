import React from "react";
import PropTypes from "prop-types";

const Message = ({ text, danger, info, success }) => {
  let classes = ["message"];

  // Handle the danger class
  if (danger) classes.push("is-danger");

  // Handle the info class
  if (info) classes.push("is-info");

  // Handle the success class
  if (success) classes.push("is-success");

  return (
    <div className={classes.join(" ")}>
      <p className="message-body">Invalid OTP Provided.</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
};

export default Message;
