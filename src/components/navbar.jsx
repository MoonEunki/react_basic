import React, { memo } from "react";

const Navbar = memo((props) => {
  console.log("Navbar");
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>습관 트래커 </span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  );
});

export default Navbar;
