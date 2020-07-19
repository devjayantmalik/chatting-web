import React from "react";

const Menu = ({ children }) => {
  return (
    <div id="navbarMenu" className="navbar-menu">
      <div className="navbar-end">
        <div className="tabs is-right">
          <ul>{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
