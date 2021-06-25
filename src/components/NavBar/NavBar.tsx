import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/mountain">Mountain</NavLink>
      <NavLink to="/beach">Beach</NavLink>
      <NavLink to="/bird">Bird</NavLink>
      <NavLink to="/food">Food</NavLink>
    </div>
  );
};

export default NavBar;
