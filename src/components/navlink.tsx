import React, { useState } from "react";

export interface NavItem {
  name?: string;
  url?: string;
}

const NavLink = (nav_item: any) => {
  return (
    <>
      <a href={nav_item.nav_item.url} className="link">
        {nav_item.nav_item.name}
      </a>
    </>
  );
};

export default NavLink;
