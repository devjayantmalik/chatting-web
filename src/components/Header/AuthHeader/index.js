import React from "react";

import MenuItem from "../common/MenuItem";
import Menu from "../common/Menu";
import Brand from "../common/Brand";

const AuthHeader = () => {
  return (
    <header>
      <nav className="navbar is-fixed-top">
        <div className="container">
          <Brand logo="kalam.svg" />
          <Menu>
            <MenuItem url="/" title="Home" />
            <MenuItem url="/login" title="Login" />
            <MenuItem url="/signup" title="Register" />
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
