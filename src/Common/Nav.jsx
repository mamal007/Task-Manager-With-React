import React from "react";
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div className="m-3 mb-5">
      <ul className="nav nav-pills justify-content-center" style={{direction: "rtl"}}>
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">
            صفحه اصلی
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            درباره من
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
