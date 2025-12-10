import React, { Component } from 'react'
// Companents{
  import Navbar from "../Components/Navbar";
// }

// Images{
import home_static from '../assets/home_page_statis.png'
// }

// Icons{
import { Dot } from 'lucide-react';
// }

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className='container font-lato'>
          
          <div className='mb-[24px]'>
            <div className='mt-[47px] flex gap-[50px]'>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Jami qarzlar</p>
                <h2 className='text-[30px] font-bold text-[#000000'>15,200,000 so’m</h2>
              </div>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>To’langan qarzlar</p>
                <h2 className='text-[30px] font-bold text-[#000000'>8,450,000 so’m</h2>
              </div>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full'>
                <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Faol qarzdorlar</p>
                <h2 className='text-[30px] font-bold text-[#000000'>125 ta</h2>
              </div>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FF0000] max-w-[300px] w-full text-center'>
                <h2 className='text-[25px] font-bold text-[#fff] mb-[5px]'>8 ta</h2>
                <h2 className='text-[25px] font-bold text-[#fff]'>Bugungi eslatmalar</h2>
              </div>
            </div>
            <div className='mt-[37px] flex gap-[45px]'>
              <div>
                <img className='bg-[#fff] p-[29px] rounded-[20px] ' src={home_static} alt="" />
              </div>

              <div className='bg-[#fff] rounded-[20px] px-[25px] py-[20px] max-w-[450px] w-full'>
                  <p className='text-[20px] font-semibold mb-[24px] text-[#3A3A3A]'>Mahsulotlar bo’yicha qarz taqsimoti</p>
                  <div className='w-[260px] h-[260px] ml-[65px] mb-[24px] bg-[#FF8800] rounded-full p-[25px]'>
                    <div className='w-[210px] h-[210px] bg-[#fff] rounded-full pt-[65px] text-center'>
                      <h2 className='text-[30px] font-[600]'>Umumiy</h2>
                      <p className='text-[20px] font-[400] text-[#8C8C8C]'>qarzlar</p>
                    </div>
                  </div>

                  <div>
                  <span className='flex items-center justify-between mb-[16px]'>
                    <p className='flex items-center gap-[15px] '><span className='w-[14px] h-[14px] bg-[#5269FF] rounded-full'></span>To’langan qarzlar</p>
                    <p>40%</p>
                  </span>
                  <span className='flex items-center justify-between mb-[16px]'>
                    <p className='flex items-center gap-[15px] '><span className='w-[14px] h-[14px] bg-[#FF0004] rounded-full'></span>Vaqti o’tgan qarzlar</p>
                    <p>25%</p>
                  </span>
                  <span className='flex items-center justify-between'>
                    <p className='flex items-center gap-[15px] '><span className='w-[14px] h-[14px] bg-[#FF9D00] rounded-full'></span>Yaqin muddatdagi qarzlar</p>
                    <p>35%</p>
                  </span>
                  </div>
              </div>

            </div>
          </div>
        </div>
        <div className='container'></div>
      </div>
    )
  }
}
