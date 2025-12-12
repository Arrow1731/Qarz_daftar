import React from "react";
import { NavLink } from "react-router-dom";
import Logo_img from "../assets/react.svg";
// import Profile_icon from "../assets/prof_ic.svg";
import Profil_icon from "../assets/Profile_img.png";
function Navigation() {
  return (
    <div className="bg-[#003E3D] w-full h-[85px] text-[#fff]">
      <div className=" container nav_content flex justify-evenly items-center pt-[20px]">
        <div className="flex items-center gap-[14px] text-[25px] font-bold">
          <img src={Logo_img} alt="" />
          <a href="#!">Qarz daftar</a>
        </div>

        {/* UL links */}

        <div className="nav_items">
          <ul className="text-[25px] flex gap-[50px]">
            <li><a href="/Home">Bosh Sahifa</a></li>
            <li><a href="/List_Qarz">Qarzdorlar ro’yxati</a></li>
            <select className="bg-[#003E3D] outline-none" name="UZ" id="Lang_change">
              <option value="Uz">UZ</option>
              <option value="Ru">RU</option>
              <option value="En">EN</option>
            </select>
            <li><a href="/Profile_admin"><img className="max-w-[48px] w-full" src={Profil_icon} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;