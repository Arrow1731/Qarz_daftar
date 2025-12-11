import React, { Component } from 'react'
// Companents{
import Navbar from "../Components/Navbar";
// }

// Images{
import home_static from '../assets/home_page_statis.png'
// }

// Icons{
import { Dot } from 'lucide-react';
import { Search } from 'lucide-react';
import { Download } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Check } from 'lucide-react';
import { Plus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';
import { Clock } from 'lucide-react';
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
              <a href="/Loan_alerts">
                <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FF0000] max-w-[300px] w-full text-center'>
                  <h2 className='text-[25px] font-bold text-[#fff] mb-[5px]'>8 ta</h2>
                  <h2 className='text-[25px] font-bold text-[#fff]'>Bugungi eslatmalar</h2>
                </div>
              </a>
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

          <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px]'>
            <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>
            <button className='bg-[#D1A84BED] rounded-[30px] w-full p-[21px] text-[40px] font-extrabold text-[#fff] mt-[30px]'>+ QARZ QO’SHISH</button>
            <div className='flex mt-[30px] justify-between gap-[30px] items-center'>
              <form action="" className='flex items-center'>
                <Search className='mr-[-55px] z-10'/>
                <input className='py-[13px] ml-[25px] px-[45px] bg-[#F5F5F5] rounded-[15px] text-[25px] w-[883px]' type="text" placeholder='Mijoz qidiruv...' />
              </form>
              <button className='flex gap-[4px] items-center text-[20px] font-normal bg-[#F5F5F5] py-[17px] px-[6px] rounded-[15px]'><Download />PDF / Excel</button>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>Qarzdorlar<ArrowRight /></button>
            </div>
            <div>
              
              <div className="w-[1300px] h-12 bg-neutral-100 rounded-[10px] mt-[30px] flex justify-between items-center px-[30px]">
                <div className='w-[155px]'>
                  <p className="justify-start text-stone-500 text-xl font-bold">ISM</p>
                </div>
                <div className='w-[205px]'>
                  <p className="justify-start text-stone-500 text-xl font-bold">TELEFON</p>
                </div>
                <div className='w-[190px]'>
                  <p className="justify-start text-stone-500 text-xl font-bold">MAHSULOT</p>
                </div>
                <div className='w-[159px]'>
                  <p className="justify-start text-stone-500 text-xl font-bold">QARZ SUMMASI</p>
                </div>
                <div className='w-[188px]'>
                  <p className="justify-start text-stone-500 text-xl font-bold">HOLATI VA SANASI</p>
                </div>
                </div>

                <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
                  <div className='text-center w-[155px] mt-[20px]'>
                    <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
              <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
              <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

                  </div>
                  
                </div>
                <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
                  <div className='text-center w-[155px] mt-[20px]'>
                    <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
              <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
              <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

                  </div>
                  
                </div>
                <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
                  <div className='text-center w-[155px] mt-[20px]'>
                    <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
              <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
              <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

                  </div>
                  
                </div>
                <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
                  <div className='text-center w-[155px] mt-[20px]'>
                    <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
              <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
              <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

                  </div>
                  <div className='text-center w-[210px] mt-[20px]'>
                    <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

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
