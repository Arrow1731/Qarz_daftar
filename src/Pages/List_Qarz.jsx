import React, { Component } from 'react'

// Companents{
import Navbar from "../Components/Navbar";

// }

// Icons{
import { Search } from 'lucide-react';
import { Download } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Check } from 'lucide-react';
import { Plus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';
import { Clock } from 'lucide-react';
// }

export default class List_Qarz extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

      <div className='container'>
         <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px]'>
                    <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>
                    <div className='flex gap-[25px] items-center mt-[40px] justify-between'>
                      <button className='flex gap-[4px] items-center text-[20px] font-normal bg-[#F5F5F5] py-[13px] px-[6px] rounded-[15px]'><Download />PDF / Excel</button>
                      <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px] text-[#fff]'>Ogohlantirish</button>
                      <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#E1FF00] px-[11px] py-[11px] rounded-[15px] text-[#000]'>Filtirlash</button>
                    <button className='bg-[#1C9B1C] rounded-[15px] w-[52%] p-[10px] text-[30px] font-extrabold text-[#fff]'>+ QARZ QO’SHISH</button>
                    </div>
                    <div className='flex mt-[30px] justify-between gap-[30px] items-center'>
                      <form action="" className='flex items-center'>
                        <Search className='mr-[-55px] z-10'/>
                        <input className='py-[13px] ml-[25px] px-[45px] bg-[#F5F5F5] rounded-[15px] text-[25px] w-[850px]' type="text" placeholder='Mijoz qidiruv...' />
                      </form>
                      <button className='flex gap-[4px] items-center text-[25px] font-semibold text-[#fff]  bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>Eng ko’p qarzdorlar</button>
                    </div>
                    <div>
                      
                      <div className="w-[1150px] h-12 bg-neutral-100 rounded-[10px] mt-[30px] flex justify-between items-center px-[30px]">
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
      </div>

    )
  }
}
