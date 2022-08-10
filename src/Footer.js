import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="container-fuid footer p-4" 
       style={{ height: "100px"}}>
        <p>
        © 2022 Copyright: Shlok:
          Made by 
          {" "}
          <a href="https://www.linkedin.com/in/priyanka-tanwar-08/">
            Priyanka Tanwar
          </a>{" "}
          &
          <a href="https://www.linkedin.com/in/rishita-pandey-b6b8b31a1">
          Rishita Pandey
          </a>  xoxo
        </p>
      </div>
    </div>
  );
};

export default Footer;
