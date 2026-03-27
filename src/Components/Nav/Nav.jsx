import React from "react";
import coinDoller from "../../assets/dollar_1.png";
const Nav = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold">
          {coin} Coins
          <img src={coinDoller} alt="coins" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
