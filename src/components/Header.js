import React from "react";
// Images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <h1 className="uppercase font-primary text-[28px] text-gradient">
              Ridho <br />
              <span className="text-white">Kurniawan</span>
            </h1>
          </a>
          {/* Button */}
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
