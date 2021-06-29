import React, { Suspense } from "react";

import { NavLink, BrowserRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="nav-bar">
          <div className="nav-item">
            <NavLink to="/mountain">Mountain</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/beach">Beach</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/bird">Bird</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/food">Food</NavLink>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default NavBar;
