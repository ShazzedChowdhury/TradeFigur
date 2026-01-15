import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo/netolyze-logo.png'
import footeLogo from '../../assets/logo/footer-netolyze-logo.png'
import magnifierLogo from "../../assets/logo/magnifier.png";
const Netolyze = ({isFooter=false}) => {
    return (
      <Link to={"/"} className="flex relative">
        {/* <img src={logo} className='h-10' /> */}
        {isFooter ? (
          <img src={footeLogo} className="w-12" alt="logo" />
        ) : (
          <img src={logo} className="w-11" alt="logo" />
        )}

        <p className="text-white font-bold text-2xl flex absolute top-3 left-12">
          <span className={`-mr-2 ${!isFooter && " bg-clip-text"}`}>Net</span>
          <img
            src={magnifierLogo}
            className="w-10 -rotate-160"
            alt="magnifier image"
          />
          <span
            className={`font-thin -ml-2 ${
              !isFooter && "bg-clip-text"
            }`}
          >
            lyze
          </span>
        </p>
      </Link>
    );
};

export default Netolyze;