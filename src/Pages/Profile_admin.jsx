import React, { Component } from 'react'
import Navbar from "../Components/Navbar";
import Profil_icon from "../assets/Profile_img.png";
// import ActivityChart from "../Components/ActivityChart";
import nd_sectionimg from "../assets/Bounds.png";

export default class Profile_admin extends Component {
  render() {
    return (
      <div className='bg-[#FFF9EC] w-full h-[100vh]'>
        <Navbar></Navbar>
        <div className="container">
          <div className='text-center mt-[50px]'>
            <h2 className='text-[50px] font-semibold'>Sozlamalar</h2>
            <p className='text-[25px] mt-[10px]'>Ilovaning umumiy sozlamalari</p>
          </div>

          <div className='mt-[50px] flex gap-[57px]'>

            <div>
              <div className='max-w-[540px] w-full h-[750px] bg-[#fff] rounded-[30px] py-[30px] px-[35px]'>
                <h2 className='text-[22px] font-bold'>Profil ma'lumotlari</h2>

                {/* INFO */}
                <div className='flex items-center gap-[28px] mt-[35px]'>
                  <div>
                    <img src={Profil_icon} alt="Rasm" />
                  </div>
                  <div>
                    <h4 className='text-[25px] font-bold'>G’iyosbek G’aniybekov</h4>
                    <p className='text-[15px] mt-[15px]'>giyosbekganiybekov21@gmail.com</p>
                  </div>
                </div>

                {/* INFO_ADMIN */}

                <div className='mt-[20px]'>
                  <label className='text-[20px]' htmlFor="Name">To'liq ism</label> <br />
                  <input className='max-w-469px w-full h-[59px] rounded-[15px] border-[1px] pl-[18px] py-[18px] outline-none mt-[20px]' type="text" name="adm_name" id="admin_name" placeholder='Faoydalanuvchining to’iq ismi' /> <br /><br />
                  <label className='text-[20px]' htmlFor="Name_comp">Do'kon nomi</label> <br />
                  <input className='max-w-469px w-full h-[59px] rounded-[15px] border-[1px] pl-[18px] py-[18px] outline-none mt-[20px]' type="text" name="Name" id="Market_name" placeholder='Faoydalanuvchining to’iq ismi' /> <br /><br />

                  {/* Countries */}

                  <label className='text-[20px]' htmlFor="Name_Count">Yashayotgan davlatingiz</label> <br />
                  <select className='border-[1px] max-w-469px w-full h-[59px] rounded-[15px] pl-[18px] py-[18px] outline-none mt-[20px]' name="Name_Countries" id="Country_name"> <br />
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Russia">Russia</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Kazakistan">Kazakistan</option>
                    <option value="Turkiya">Turkiya</option>
                    <option value="Xitoy">Xitoy</option>
                  </select><br /><br />

                  {/* Lang change */}

                  <label className='text-[20px]' htmlFor="Lang_Ch">Til</label><br />
                  <select className='border-[1px] max-w-469px w-full h-[59px] rounded-[15px] pl-[18px] py-[18px] outline-none mt-[20px]' name="Langs" id="App_Lang"> <br />
                    <option value="Uzbek">Uzbek</option>
                    <option value="Russian">Russian</option>
                    <option value="Turkmen">Turkmen</option>
                    <option value="Kazak">Kazak</option>
                    <option value="Turk">Turk</option>
                    <option value="Xitoy">Xitoy</option>
                  </select>
                </div>
              </div>

              {/* Save Button */}

              <div className='max-w-[540px] w-full h-[50px] bg-[#D1A84B] text-center rounded-[15px] py-[5px] mt-[15px]'>
                <button><a href="#!" className='text-[25px] font-semibold text-[#fff]'>Saqlash</a></button>
              </div>
            </div>

            {/* 2nd Section */}
            <div className='mt-[-20px]'>
              <div>
                {/* <ActivityChart></ActivityChart> */}
                <img className='w-full h-[420px]' src={nd_sectionimg} alt="" />
              </div> <br />
              <div>
                <img className='w-full h-[420px]' src={nd_sectionimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
