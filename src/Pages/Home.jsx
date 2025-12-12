// import React, { Component } from 'react'
// // import '../main'
// // Companents{
// import Navbar from "../Components/Navbar";
// // }

// // Images{
// import home_static from '../assets/home_page_statis.png'
// // }

// // Icons{
// import { Search } from 'lucide-react';
// import { Download } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
// import { Check } from 'lucide-react';
// import { Plus } from 'lucide-react';
// import { CircleMinus } from 'lucide-react';
// import { Clock } from 'lucide-react';
// // }


// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar></Navbar>
//         <div className='container font-lato'>
//           <div className='mb-[24px]'>
//             <div className='mt-[47px] flex gap-[50px]'>
//               <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
//                 <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Jami qarzlar</p>
//                 <h2 className='text-[30px] font-bold text-[#000000'>15,200,000 so’m</h2>
//               </div>
//               <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
//                 <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>To’langan qarzlar</p>
//                 <h2 className='text-[30px] font-bold text-[#000000'>8,450,000 so’m</h2>
//               </div>
//               <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
//                 <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Faol qarzdorlar</p>
//                 <h2 className='text-[30px] font-bold text-[#000000'>125 ta</h2>
//               </div>
//               <a href="/Loan_alerts">
//                 <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FF0000] max-w-[300px] w-full text-center'>
//                   <h2 className='text-[25px] font-bold text-[#fff] mb-[5px]'>8 ta</h2>
//                   <h2 className='text-[25px] font-bold text-[#fff]'>Bugungi eslatmalar</h2>
//                 </div>
//               </a>
//             </div>
//             <div className='mt-[37px] flex gap-[45px]'>
//               <div>
//                 <img className='bg-[#fff] p-[29px] rounded-[20px] ' src={home_static} alt="" />
//               </div>

//               <div className='bg-[#fff] rounded-[20px] px-[25px] py-[20px] max-w-[450px] w-full'>
//                 <p className='text-[20px] font-semibold mb-[24px] text-[#3A3A3A]'>Mahsulotlar bo’yicha qarz taqsimoti</p>
//                 <div className='w-[260px] h-[260px] ml-[65px] mb-[24px] bg-[#FF8800] rounded-full p-[25px]'>
//                   <div className='w-[210px] h-[210px] bg-[#fff] rounded-full pt-[65px] text-center'>
//                     <h2 className='text-[30px] font-[600]'>Umumiy</h2>
//                     <p className='text-[20px] font-[400] text-[#8C8C8C]'>qarzlar</p>
//                   </div>
//                 </div>

//                 <div>
//                   <span className='flex items-center justify-between mb-[16px]'>
//                     <p className='flex items-center gap-[15px] '><span className='w-[14px] h-[14px] bg-[#5269FF] rounded-full'></span>To’langan qarzlar</p>
//                     <p>40%</p>
//                   </span>
//                   <span className='flex items-center justify-between mb-[16px]'>
//                     <p className='flex items-center gap-[15px] '><span className='w-[14px] h-[14px] bg-[#FF0004] rounded-full'></span>Vaqti o’tgan qarzlar</p>
//                     <p>25%</p>
//                   </span>
//                   <span className='flex items-center justify-between'>
//                     <p className='flex items-center gap-[15px] '><span className='w-[14px] h-[14px] bg-[#FF9D00] rounded-full'></span>Yaqin muddatdagi qarzlar</p>
//                     <p>35%</p>
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Loan Customers */}

//           <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px]'>
//             <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>
//             <button className='bg-[#D1A84BED] rounded-[30px] w-full p-[21px] text-[40px] font-extrabold text-[#fff] mt-[30px]'>+ QARZ QO’SHISH</button>
//             <div className='flex mt-[30px] justify-between gap-[30px] items-center'>
//               <form action="" className='flex items-center'>
//                 <Search className='mr-[-55px] z-10' />
//                 <input className='py-[13px] ml-[25px] px-[45px] bg-[#F5F5F5] rounded-[15px] text-[25px] w-[883px]' type="text" placeholder='Mijoz qidiruv...' />
//               </form>
//               <button className='flex gap-[4px] items-center text-[20px] font-normal bg-[#F5F5F5] py-[17px] px-[6px] rounded-[15px]'><Download />PDF / Excel</button>
//               <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><a href="/List_qarz">Qarzdorlar</a><ArrowRight /></button>
//             </div>
//             <div>

//               <div className="w-[1300px] h-12 bg-neutral-100 rounded-[10px] mt-[30px] flex justify-between items-center px-[30px]">
//                 <div className='w-[155px]'>
//                   <p className="justify-start text-stone-500 text-xl font-bold">ISM</p>
//                 </div>
//                 <div className='w-[205px]'>
//                   <p className="justify-start text-stone-500 text-xl font-bold">TELEFON</p>
//                 </div>
//                 <div className='w-[190px]'>
//                   <p className="justify-start text-stone-500 text-xl font-bold">MAHSULOT</p>
//                 </div>
//                 <div className='w-[159px]'>
//                   <p className="justify-start text-stone-500 text-xl font-bold">QARZ SUMMASI</p>
//                 </div>
//                 <div className='w-[188px]'>
//                   <p className="justify-start text-stone-500 text-xl font-bold">HOLATI VA SANASI</p>
//                 </div>
//               </div>

//               <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
//                 <div className='text-center w-[155px] mt-[20px]'>
//                   <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>
//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>
//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
//                   <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>
//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
//                   <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>
//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>
//                 </div>
//               </div>

//               <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
//                 <div className='text-center w-[155px] mt-[20px]'>
//                   <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
//                   <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
//                   <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

//                 </div>

//               </div>
//               <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
//                 <div className='text-center w-[155px] mt-[20px]'>
//                   <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
//                   <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
//                   <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

//                 </div>

//               </div>
//               <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>
//                 <div className='text-center w-[155px] mt-[20px]'>
//                   <h2 className="justify-start text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'><Check />To'landi</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">+998 90 123 45 67</h2>
//                   <button id='add_loan_btn' className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'><Plus />Qarz qo’shish</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>
//                   <button className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'><CircleMinus />Qarz ayirish</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">2,500,000 so’m</h2>
//                   <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'><Clock />Tarix</button>

//                 </div>
//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="justify-start text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>To’lanmagan</button>

//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Header  Sub page*/}

//         <div className='container'>
//           <div id='add_loan' className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-semibold">Qarz qo’shish</h2>
//                 <button className="text-2xl">×</button>
//               </div>


//               <div className="bg-gray-100 rounded-xl p-4 mb-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center text-xl font-bold">👤</div>
//                       <div>
//                         <h3 className="font-semibold">Ali Valiyev</h3>
//                         <p className="text-sm text-gray-500">+998 90 123 45 67</p>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-600">19.09.2025</p>
//                 </div>


//                 <hr className="my-3" />


//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-blue-600 font-semibold">Joriy qarz:</span>
//                   <span className="text-blue-600 font-semibold">2,500,000 so’m</span>
//                 </div>
//               </div>


//               {/* Form */}
//               <div className="flex flex-col gap-3">
//                 {/* Sum */}
//                 <div>
//                   <label className="block mb-1 text-sm">Qo’shiladigan summa (sum) *</label>
//                   <input
//                     type="text"
//                     placeholder="1 000 so’m tarzida"
//                     className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-yellow-400"
//                   />
//                 </div>


//                 {/* Date */}
//                 <div>
//                   <label className="block mb-1 text-sm">Summa qo’shilgan muddati</label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                     <span className="absolute right-3 top-3 text-xl">📅</span>
//                   </div>
//                 </div>


//                 {/* Notes */}
//                 <div>
//                   <label className="block mb-1 text-sm">Izoh</label>
//                   <textarea
//                     placeholder="Qarz haqida qo’shimcha ma’lumot"
//                     className="w-full border rounded-xl p-3 h-24 outline-none focus:ring-2 focus:ring-yellow-400"
//                   ></textarea>
//                 </div>
//               </div>


//               {/* Buttons */}
//               <div className="flex justify-between mt-6">
//                 <button className="w-1/2 border border-gray-300 rounded-xl py-3 mr-2 font-medium">Bekor qilish</button>
//                 <button className="w-1/2 bg-yellow-400 rounded-xl py-3 ml-2 font-medium text-white">Qarz qo’shish</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


























import React, { Component } from 'react';
import Navbar from "../Components/Navbar";

// Images
import home_static from '../assets/home_page_statis.png';

// Icons
import { Search, Download, ArrowRight, Check, Plus, CircleMinus, Clock } from 'lucide-react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      minus: false,
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };


  minusOpen = () => {
    this.setState({ minusModal: true });
  };

  minusClose = () => {
    this.setState({ minusModal: false });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className='container font-lato'>
          <div className='mb-[24px]'>
            <div className='mt-[47px] flex gap-[50px]'>

              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Jami qarzlar</p>
                <h2 className='text-[30px] font-bold text-[#000000]'>15,200,000 so’m</h2>
              </div>

              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>To’langan qarzlar</p>
                <h2 className='text-[30px] font-bold text-[#000000]'>8,450,000 so’m</h2>
              </div>

              <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
                <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Faol qarzdorlar</p>
                <h2 className='text-[30px] font-bold text-[#000000]'>125 ta</h2>
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
                <img className='bg-[#fff] p-[29px] rounded-[20px]' src={home_static} alt="static" />
              </div>

              <div className='bg-[#fff] rounded-[20px] px-[25px] py-[20px] max-w-[450px] w-full'>
                <p className='text-[20px] font-semibold mb-[24px] text-[#3A3A3A]'>
                  Mahsulotlar bo’yicha qarz taqsimoti
                </p>

                <div className='w-[260px] h-[260px] ml-[65px] mb-[24px] bg-[#FF8800] rounded-full p-[25px]'>
                  <div className='w-[210px] h-[210px] bg-[#fff] rounded-full pt-[65px] text-center'>
                    <h2 className='text-[30px] font-[600]'>Umumiy</h2>
                    <p className='text-[20px] font-[400] text-[#8C8C8C]'>qarzlar</p>
                  </div>
                </div>

                <div>
                  <span className='flex items-center justify-between mb-[16px]'>
                    <p className='flex items-center gap-[15px]'>
                      <span className='w-[14px] h-[14px] bg-[#5269FF] rounded-full'></span>To’langan qarzlar
                    </p>
                    <p>40%</p>
                  </span>

                  <span className='flex items-center justify-between mb-[16px]'>
                    <p className='flex items-center gap-[15px]'>
                      <span className='w-[14px] h-[14px] bg-[#FF0004] rounded-full'></span>Vaqti o’tgan qarzlar
                    </p>
                    <p>25%</p>
                  </span>

                  <span className='flex items-center justify-between'>
                    <p className='flex items-center gap-[15px]'>
                      <span className='w-[14px] h-[14px] bg-[#FF9D00] rounded-full'></span>Yaqin muddatdagi qarzlar
                    </p>
                    <p>35%</p>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* TABLE SECTION */}
          <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px]'>

            <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>

            <button className='bg-[#D1A84BED] rounded-[30px] w-full p-[21px] text-[40px] font-extrabold text-[#fff] mt-[30px]'>
              + QARZ QO’SHISH
            </button>

            <div className='flex mt-[30px] justify-between gap-[30px] items-center'>
              <form className='flex items-center'>
                <Search className='mr-[-55px] z-10' />
                <input className='py-[13px] ml-[25px] px-[45px] bg-[#F5F5F5] rounded-[15px] text-[25px] w-[883px]'
                  type="text"
                  placeholder='Mijoz qidiruv...'
                />
              </form>

              <button className='flex gap-[4px] items-center text-[20px] font-normal bg-[#F5F5F5] py-[17px] px-[6px] rounded-[15px]'>
                <Download /> PDF / Excel
              </button>

              <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
                <a href="/List_qarz">Qarzdorlar</a>
                <ArrowRight />
              </button>
            </div>

            {/* LIST ITEM */}
            <div className='w-[1300px] h-12 bg-neutral-100 rounded-[10px] mt-[30px] flex justify-between items-center px-[30px]'>
              <div className='w-[155px]'>
                <p className="text-stone-500 text-xl font-bold">ISM</p>
              </div>
              <div className='w-[205px]'>
                <p className="text-stone-500 text-xl font-bold">TELEFON</p>
              </div>
              <div className='w-[190px]'>
                <p className="text-stone-500 text-xl font-bold">MAHSULOT</p>
              </div>
              <div className='w-[159px]'>
                <p className="text-stone-500 text-xl font-bold">QARZ SUMMASI</p>
              </div>
              <div className='w-[188px]'>
                <p className="text-stone-500 text-xl font-bold">HOLATI VA SANASI</p>
              </div>
            </div>

            {/* ONE ROW */}
            <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

              {/* NAME */}
              <div className='text-center w-[155px] mt-[20px]'>
                <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
                  <Check /> To'landi
                </button>
              </div>

              {/* PHONE */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  +998 90 123 45 67
                </h2>

                <button
                  onClick={this.openModal}
                  className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
                >
                  <Plus /> Qarz qo’shish
                </button>
              </div>

              {/* PRODUCT */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

                <button
                  onClick={this.minusOpen}
                 className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
                  <CircleMinus /> Qarz ayirish
                </button>
              </div>

              {/* SUM */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  2,500,000 so’m
                </h2>

                <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
                  <Clock /> Tarix
                </button>
              </div>

              {/* STATUS */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
                  To’lanmagan
                </button>
              </div>

            </div>
            <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

              {/* NAME */}
              <div className='text-center w-[155px] mt-[20px]'>
                <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
                  <Check /> To'landi
                </button>
              </div>

              {/* PHONE */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  +998 90 123 45 67
                </h2>

                <button
                  onClick={this.openModal}
                  className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
                >
                  <Plus /> Qarz qo’shish
                </button>
              </div>

              {/* PRODUCT */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

                <button
                  onClick={this.minusOpen}
                 className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
                  <CircleMinus /> Qarz ayirish
                </button>
              </div>

              {/* SUM */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  2,500,000 so’m
                </h2>

                <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
                  <Clock /> Tarix
                </button>
              </div>

              {/* STATUS */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
                  To’lanmagan
                </button>
              </div>

            </div>
            <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

              {/* NAME */}
              <div className='text-center w-[155px] mt-[20px]'>
                <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
                  <Check /> To'landi
                </button>
              </div>

              {/* PHONE */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  +998 90 123 45 67
                </h2>

                <button
                  onClick={this.openModal}
                  className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
                >
                  <Plus /> Qarz qo’shish
                </button>
              </div>

              {/* PRODUCT */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

                <button
                  onClick={this.minusOpen}
                 className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
                  <CircleMinus /> Qarz ayirish
                </button>
              </div>

              {/* SUM */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  2,500,000 so’m
                </h2>

                <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
                  <Clock /> Tarix
                </button>
              </div>

              {/* STATUS */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
                  To’lanmagan
                </button>
              </div>

            </div>
            <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

              {/* NAME */}
              <div className='text-center w-[155px] mt-[20px]'>
                <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
                  <Check /> To'landi
                </button>
              </div>

              {/* PHONE */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  +998 90 123 45 67
                </h2>

                <button
                  onClick={this.openModal}
                  className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
                >
                  <Plus /> Qarz qo’shish
                </button>
              </div>

              {/* PRODUCT */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

                <button
                  onClick={this.minusOpen}
                 className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
                  <CircleMinus /> Qarz ayirish
                </button>
              </div>

              {/* SUM */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
                  2,500,000 so’m
                </h2>

                <button className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
                  <Clock /> Tarix
                </button>
              </div>

              {/* STATUS */}
              <div className='text-center w-[210px] mt-[20px]'>
                <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

                <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
                  To’lanmagan
                </button>
              </div>

            </div>
          </div>
        </div>

        

        {/* MODAL */}
        {this.state.showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">

              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Qarz qo’shish</h2>

                <button onClick={this.closeModal} className="text-2xl">
                  ×
                </button>
              </div>

              {/* USER BOX */}
              <div className="bg-gray-100 rounded-xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
                      👤
                    </div>

                    <div>
                      <h3 className="font-semibold">Ali Valiyev</h3>
                      <p className="text-sm text-gray-500">+998 90 123 45 67</p>
                    </div>

                  </div>
                  <p className="text-sm text-gray-600">19.09.2025</p>
                </div>

                <hr className="my-3" />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">Oldingi qarzi</span>
                  <span className="text-gray-600">2,500,000 so’m</span>
                </div>

              </div>

              {/* INPUTS */}
              <div className="space-y-3">

                <input
                  type="number"
                  placeholder="Qarz summasi..."
                  className="w-full p-3 bg-gray-100 rounded-xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Mahsulot nomi..."
                  className="w-full p-3 bg-gray-100 rounded-xl outline-none"
                />

                <input
                  type="date"
                  className="w-full p-3 bg-gray-100 rounded-xl outline-none"
                />

              </div>

              <button
                className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
              >
                Qo’shish
              </button>

            </div>
          </div>
        )}




        {this.state.minusModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">

              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Qarz ayirish</h2>

                <button onClick={this.minusClose} className="text-2xl">
                  ×
                </button>
              </div>

              {/* USER BOX */}
              <div className="bg-gray-100 rounded-xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
                      👤
                    </div>

                    <div>
                      <h3 className="font-semibold">Ali Valiyev</h3>
                      <p className="text-sm text-gray-500">+998 90 123 45 67</p>
                    </div>

                  </div>
                  <p className="text-sm text-gray-600">19.09.2025</p>
                </div>

                <hr className="my-3" />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">Oldingi qarzi</span>
                  <span className="text-gray-600">2,500,000 so’m</span>
                </div>

              </div>

              {/* INPUTS */}
              <div className="space-y-3">

                <input
                  type="number"
                  placeholder="Qarz summasi..."
                  className="w-full p-3 bg-gray-100 rounded-xl outline-none"
                />

                <input
                  type="text"
                  placeholder="Mahsulot nomi..."
                  className="w-full p-3 bg-gray-100 rounded-xl outline-none"
                />

                <input
                  type="date"
                  className="w-full p-3 bg-gray-100 rounded-xl outline-none"
                />

              </div>

              <button
                className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
              >
                Qo’shish
              </button>

            </div>
          </div>
        )}


        <div className="w-[1312px] h-[908px] bg-white rounded-[40px] container p-[39px]">
          <div className='flex items-center justify-between mb-[49px]'>
            <h2 className="justify-start text-black text-4xl font-bold">Ali Valiyev - Qarz tarixi</h2>
            <button onClick={this.close} className="text-[50px]">
                  ×
                </button>
          </div>

          <div className='flex justify-between items-center'>
            <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
            <p className="justify-start text-black text-xl font-normal">Jami olgan</p>
            <h2 className="justify-start text-red-600 text-2xl font-bold">4,500,000 so’m</h2>
            </div>
            <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
            <p className="justify-start text-black text-xl font-normal">Joriy qarz</p>
            <h2 className="justify-start text-indigo-700 text-2xl font-bold">2,500,000 so’m</h2>
            </div>
            <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
            <p className="justify-start text-black text-xl font-normal">Sro’q</p>
            <h2 className="justify-start text-purple-600 text-2xl font-bold">2,500,000 so’m</h2>
            </div>
          </div>

          <div className="w-full bg-white rounded-[20px] border-2 border-zinc-400 mt-[40px] px-[29px] py-[40px]" >
<h2 className="justify-start text-black text-2xl font-bold mb-[30px]">Mijoz ma’lumotlari</h2>

<div>
        <div>
          <p className="justify-start text-neutral-500 text-xl font-normal">To’liq ism</p>
          <h className="justify-start text-black text-xl font-bold">Ali Valiyev</h>
        </div>
</div>
          </div>

        </div>

      </div>
    );
  }
}