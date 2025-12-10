import React from "react";
import { NavLink } from "react-router-dom";
import Logo_img from "../assets/react.svg";
import Profile_icon from "../assets/prof_ic.svg";
function Navigation() {
  return (
    <div className="bg-[#003E3D] w-full h-[85px] text-[#fff]">
      <div className="nav_content flex justify-evenly items-center pt-[20px]">
        <div className="flex items-center gap-[14px] text-[25px] font-bold">
          <img src={Logo_img} alt="" />
          <a href="#!">Qarz daftar</a>
        </div>

        {/* UL links */}

        <div className="nav_items">
          <ul className="text-[25px] font-bold flex gap-[50px]">
            <li><a href="#!">Bosh Sahifa</a></li>
            <li><a href="#!">Qarzdorlar ro’yxati</a></li>
            <select className="bg-[#003E3D]" name="UZ" id="Lang_change">
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="En">En</option>
            </select>
            <li><a href="/Profile_admin"><img className="max-w-[48px] w-full" src={Profile_icon} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;