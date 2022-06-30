import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="src\Home.js">
            <img
              style={{ height: "50px", width: "50px" }}
              className="logo mx-auto "
              src={logo}
              alt="logo"
              srcSet=""
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
