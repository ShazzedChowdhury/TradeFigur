import React from "react";
import { useNavigate } from "react-router";

const Button = ({ content, style, handler }) => {
  
  return (
    <button
      onClick={handler}
      className={`text-white bg-gradient-to-r from-[#7B53E8]  to-[#5831C3]  focus:outline-none font-medium rounded-sm text-sm px-4 py-2.5 text-center leading-5 cursor-pointer capitalize ${
        style && style
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
