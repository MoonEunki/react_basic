import React from "react";

const Navbar = (props) => {
  console.log(props);
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>습관 트래커 </span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  );
};

export default Navbar;
