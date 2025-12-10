import React, { Component } from 'react'
import Navbar from "../Components/Navbar";
import Profil_icon from "../assets/Profile_img.png";
import ActivityChart from "../components/ActivityChart";

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

          <div className='mt-[50px] flex gap-[57px] items-center'>
            <div className='max-w-[540px] w-full h-[720px] bg-[#fff] rounded-[30px] py-[30px] px-[35px]'>
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
            </div>

            {/* 2nd Section */}
            <div>
              <div>
                <ActivityChart></ActivityChart>
              </div> <br />
              <div className='max-w-[750px] w-full h-[333px] bg-[#fff] rounded-[30px]'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
