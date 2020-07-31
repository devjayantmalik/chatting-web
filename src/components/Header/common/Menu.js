import React from "react";

const Menu = ({ children }) => {
  return (
    <div id="navbarMenu" className="navbar-menu">
      <ul className="navbar-end">{children}</ul>
    </div>
  );
};

export default Menu;
