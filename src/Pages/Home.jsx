import React, { Component } from 'react'
import Navbar from "../Components/Navbar";
import home_static from '../assets/home_page_statis.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className='container font-lato'>
          
          <div>
            <div className='mt-[47px] flex gap-[50px]'>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400px] text-[#706F6F] mb-[10px]'>Jami qarzlar</p>
                <h2 className='text-[30px] font-bold text-[#000000'>15,200,000 so’m</h2>
              </div>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400px] text-[#706F6F] mb-[10px]'>To’langan qarzlar</p>
                <h2 className='text-[30px] font-bold text-[#000000'>8,450,000 so’m</h2>
              </div>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full'>
                <p className='text-[20px] font-[400px] text-[#706F6F] mb-[10px]'>Faol qarzdorlar</p>
                <h2 className='text-[30px] font-bold text-[#000000'>125 ta</h2>
              </div>
              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FF0000] max-w-[300px] w-full text-center'>
                <h2 className='text-[25px] font-bold text-[#fff] mb-[5px]'>8 ta</h2>
                <h2 className='text-[25px] font-bold text-[#fff]'>Bugungi eslatmalar</h2>
              </div>
            </div>
            <div className='mt-[37px] flex'>
              <div>
                <img className='bg-[#fff] p-[29px] rounded-[20px] ' src={home_static} alt="" />
              </div>

              <div>
                  <p>Mahsulotlar bo’yicha qarz taqsimoti</p>
                  <div>
                    <div>
                      <h2>Umumiy</h2>
                      <p>qarzlar</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
