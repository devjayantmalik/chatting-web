import React from "react";

import MenuItem from "../common/MenuItem";
import Menu from "../common/Menu";
import Brand from "../common/Brand";
import MenuDropdown, { DropdownLink } from "../common/MenuDropdown";

const SiteHeader = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Brand logo="kalam.svg" />
          <Menu>
            <MenuItem url="/" title="Dashboard" />
            <MenuItem url="/channels" title="Channels" />
            <MenuItem url="/chats" title="Chats" />
            <MenuDropdown title="Account" url="/profile">
              <DropdownLink url="/" title="Dashboard" />
              <div className="navbar-divider" />
              <DropdownLink url="/profile" title="Profile" />
              <DropdownLink url="/settings" title="Settings" />
              <div className="navbar-divider" />
              <DropdownLink url="/logout" title="Logout" />
            </MenuDropdown>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
