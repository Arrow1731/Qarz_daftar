// import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo_img from "../assets/react.svg";
// // import Profile_icon from "../assets/prof_ic.svg";
// import Profil_icon from "../assets/Profile_img.png";
// function Navigation() {
//   return (
//     <div className="bg-[#003E3D] w-full h-[85px] text-[#fff]">
//       <div className=" container nav_content flex justify-evenly items-center pt-[20px]">
//         <div className="flex items-center gap-[14px] text-[25px] font-bold">
//           <img src={Logo_img} alt="" />
//           <a href="#!">Qarz daftar</a>
//         </div>

//         {/* UL links */}

//         <div className="nav_items">
//           <ul className="text-[25px] flex gap-[50px]">
//             <li><a href="/Home">Bosh Sahifa</a></li>
//             <li><a href="/List_Qarz">Qarzdorlar ro’yxati</a></li>
//             <select className="bg-[#003E3D] outline-none" name="UZ" id="Lang_change">
//               <option value="Uz">UZ</option>
//               <option value="Ru">RU</option>
//               <option value="En">EN</option>
//             </select>
//             <li><a href="/Profile_admin"><img className="max-w-[48px] w-full" src={Profil_icon} alt="" /></a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navigation;














import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo_img from "../assets/react.svg";
import Profil_icon from "../assets/Profile_img.png";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#003E3D] w-full text-[#fff]">
      <div className="container flex justify-between items-center h-[85px] px-4">

        {/* LOGO */}
        <div className="flex items-center gap-[14px] text-[25px] font-bold">
          <img src={Logo_img} alt="logo" />
          <a href="#!">Qarz daftar</a>
        </div>

        {/* RIGHT SIDE (LANG + BURGER ON MOBILE) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* MOBILE LANGUAGE SWITCH */}
          <select
            className="bg-[#003E3D] outline-none cursor-pointer text-[18px]"
            name="UZ"
            id="Lang_change"
          >
            <option value="Uz">UZ</option>
            <option value="Ru">RU</option>
            <option value="En">EN</option>
          </select>

          {/* BURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[32px] focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-[50px] text-[25px]">
          <li><a href="/Home">Bosh Sahifa</a></li>
          <li><a href="/List_Qarz">Qarzdorlar ro’yxati</a></li>

          <select
            className="bg-[#003E3D] outline-none cursor-pointer"
            name="UZ"
            id="Lang_change"
          >
            <option value="Uz">UZ</option>
            <option value="Ru">RU</option>
            <option value="En">EN</option>
          </select>

          <li>
            <a href="/Profile_admin">
              <img
                className="max-w-[48px] w-full"
                src={Profil_icon}
                alt="profile"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#003E3D] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-[22px]">
            <li><a href="/Home" onClick={() => setOpen(false)}>Bosh Sahifa</a></li>
            <li><a href="/List_Qarz" onClick={() => setOpen(false)}>Qarzdorlar ro’yxati</a></li>
            <li>
              <a href="/Profile_admin" onClick={() => setOpen(false)}>
                <img className="max-w-[48px]" src={Profil_icon} alt="profile" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;