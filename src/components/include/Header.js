import React from "react";
import { getLogoPath } from '../../Config';


const Header = () => {

  return (
    <div className="topBarStyle">
      <img
        src={getLogoPath()}
        width="auto"
        height="34px"
        className="headerLogoStyle"
        alt="logo"
      />
    </div>
  );
};

export default Header;