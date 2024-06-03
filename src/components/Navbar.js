import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="relative z-10 flex items-center justify-between max-w-screen-lg pt-8 mx-auto text-black ">
      <Logo />
      <svg className="w-8 h-8"
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        ></path>
      </svg>
    </div>
  );
};

export default Navbar;
