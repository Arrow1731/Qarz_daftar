// // // // // // // // import React, { Component } from 'react';
// // // // // // // // import Navbar from "../Components/Navbar";

// // // // // // // // // Images
// // // // // // // // import home_static from '../assets/home_page_statis.png';

// // // // // // // // // Icons
// // // // // // // // import { Search, Download, ArrowRight, Check, Plus, CircleMinus, Clock, Calendar  } from 'lucide-react';

// // // // // // // // export default class Home extends Component {
// // // // // // // //   constructor(props) {
// // // // // // // //     super(props);

// // // // // // // //     this.state = {
// // // // // // // //       showModal: false,
// // // // // // // //       minusModal: false,
// // // // // // // //       historyModal: false,
// // // // // // // //     };
// // // // // // // //   }

// // // // // // // //   openModal = () => {
// // // // // // // //     this.setState({ showModal: true });
// // // // // // // //   };

// // // // // // // //   closeModal = () => {
// // // // // // // //     this.setState({ showModal: false });
// // // // // // // //   };


// // // // // // // //   minusOpen = () => {
// // // // // // // //     this.setState({ minusModal: true });
// // // // // // // //   };

// // // // // // // //   minusClose = () => {
// // // // // // // //     this.setState({ minusModal: false });
// // // // // // // //   };


// // // // // // // //   historyOpen = () => {
// // // // // // // //     this.setState({ historyModal: true });
// // // // // // // //   };

// // // // // // // //   historyClose = () => {
// // // // // // // //     this.setState({ historyModal: false });
// // // // // // // //   };

// // // // // // // //   render() {
// // // // // // // //     return (
// // // // // // // //       <div>
// // // // // // // //         <Navbar />

// // // // // // // //         <div className='container font-lato'>
// // // // // // // //           <div className='mb-[24px]'>
// // // // // // // //             <div className='mt-[47px] flex gap-[50px]'>

// // // // // // // //               <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
// // // // // // // //                 <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Jami qarzlar</p>
// // // // // // // //                 <h2 className='text-[30px] font-bold text-[#000000]'>15,200,000 so’m</h2>
// // // // // // // //               </div>

// // // // // // // //               <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
// // // // // // // //                 <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>To’langan qarzlar</p>
// // // // // // // //                 <h2 className='text-[30px] font-bold text-[#000000]'>8,450,000 so’m</h2>
// // // // // // // //               </div>

// // // // // // // //               <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FFFFFF] max-w-[300px] w-full text-center'>
// // // // // // // //                 <p className='text-[20px] font-[400] text-[#706F6F] mb-[10px]'>Faol qarzdorlar</p>
// // // // // // // //                 <h2 className='text-[30px] font-bold text-[#000000]'>125 ta</h2>
// // // // // // // //               </div>

// // // // // // // //               <a href="/Loan_alerts">
// // // // // // // //                 <div className='rounded-[15px] px-[13px] py-[29px] bg-[#FF0000] max-w-[300px] w-full text-center'>
// // // // // // // //                   <h2 className='text-[25px] font-bold text-[#fff] mb-[5px]'>8 ta</h2>
// // // // // // // //                   <h2 className='text-[25px] font-bold text-[#fff]'>Bugungi eslatmalar</h2>
// // // // // // // //                 </div>
// // // // // // // //               </a>

// // // // // // // //             </div>

// // // // // // // //             <div className='mt-[37px] flex gap-[45px]'>

// // // // // // // //               <div>
// // // // // // // //                 <img className='bg-[#fff] p-[29px] rounded-[20px]' src={home_static} alt="static" />
// // // // // // // //               </div>

// // // // // // // //               <div className='bg-[#fff] rounded-[20px] px-[25px] py-[20px] max-w-[450px] w-full'>
// // // // // // // //                 <p className='text-[20px] font-semibold mb-[24px] text-[#3A3A3A]'>
// // // // // // // //                   Mahsulotlar bo’yicha qarz taqsimoti
// // // // // // // //                 </p>

// // // // // // // //                 <div className='w-[260px] h-[260px] ml-[65px] mb-[24px] bg-[#FF8800] rounded-full p-[25px]'>
// // // // // // // //                   <div className='w-[210px] h-[210px] bg-[#fff] rounded-full pt-[65px] text-center'>
// // // // // // // //                     <h2 className='text-[30px] font-[600]'>Umumiy</h2>
// // // // // // // //                     <p className='text-[20px] font-[400] text-[#8C8C8C]'>qarzlar</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div>
// // // // // // // //                   <span className='flex items-center justify-between mb-[16px]'>
// // // // // // // //                     <p className='flex items-center gap-[15px]'>
// // // // // // // //                       <span className='w-[14px] h-[14px] bg-[#5269FF] rounded-full'></span>To’langan qarzlar
// // // // // // // //                     </p>
// // // // // // // //                     <p>40%</p>
// // // // // // // //                   </span>

// // // // // // // //                   <span className='flex items-center justify-between mb-[16px]'>
// // // // // // // //                     <p className='flex items-center gap-[15px]'>
// // // // // // // //                       <span className='w-[14px] h-[14px] bg-[#FF0004] rounded-full'></span>Vaqti o’tgan qarzlar
// // // // // // // //                     </p>
// // // // // // // //                     <p>25%</p>
// // // // // // // //                   </span>

// // // // // // // //                   <span className='flex items-center justify-between'>
// // // // // // // //                     <p className='flex items-center gap-[15px]'>
// // // // // // // //                       <span className='w-[14px] h-[14px] bg-[#FF9D00] rounded-full'></span>Yaqin muddatdagi qarzlar
// // // // // // // //                     </p>
// // // // // // // //                     <p>35%</p>
// // // // // // // //                   </span>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* TABLE SECTION */}
// // // // // // // //           <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px]'>

// // // // // // // //             <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>

// // // // // // // //             <button className='bg-[#D1A84BED] rounded-[30px] w-full p-[21px] text-[40px] font-extrabold text-[#fff] mt-[30px]'>
// // // // // // // //               + QARZ QO’SHISH
// // // // // // // //             </button>

// // // // // // // //             <div className='flex mt-[30px] justify-between gap-[30px] items-center'>
// // // // // // // //               <form className='flex items-center'>
// // // // // // // //                 <Search className='mr-[-55px] z-10' />
// // // // // // // //                 <input className='py-[13px] ml-[25px] px-[45px] bg-[#F5F5F5] rounded-[15px] text-[25px] w-[883px]'
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder='Mijoz qidiruv...'
// // // // // // // //                 />
// // // // // // // //               </form>

// // // // // // // //               <button className='flex gap-[4px] items-center text-[20px] font-normal bg-[#F5F5F5] py-[17px] px-[6px] rounded-[15px]'>
// // // // // // // //                 <Download /> PDF / Excel
// // // // // // // //               </button>

// // // // // // // //               <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
// // // // // // // //                 <a href="/List_qarz">Qarzdorlar</a>
// // // // // // // //                 <ArrowRight />
// // // // // // // //               </button>
// // // // // // // //             </div>

// // // // // // // //             {/* LIST ITEM */}
// // // // // // // //             <div className='w-[1300px] h-12 bg-neutral-100 rounded-[10px] mt-[30px] flex justify-between items-center px-[30px]'>
// // // // // // // //               <div className='w-[155px]'>
// // // // // // // //                 <p className="text-stone-500 text-xl font-bold">ISM</p>
// // // // // // // //               </div>
// // // // // // // //               <div className='w-[205px]'>
// // // // // // // //                 <p className="text-stone-500 text-xl font-bold">TELEFON</p>
// // // // // // // //               </div>
// // // // // // // //               <div className='w-[190px]'>
// // // // // // // //                 <p className="text-stone-500 text-xl font-bold">MAHSULOT</p>
// // // // // // // //               </div>
// // // // // // // //               <div className='w-[159px]'>
// // // // // // // //                 <p className="text-stone-500 text-xl font-bold">QARZ SUMMASI</p>
// // // // // // // //               </div>
// // // // // // // //               <div className='w-[188px]'>
// // // // // // // //                 <p className="text-stone-500 text-xl font-bold">HOLATI VA SANASI</p>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* ONE ROW */}
// // // // // // // //             <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

// // // // // // // //               {/* NAME */}
// // // // // // // //               <div className='text-center w-[155px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <Check /> To'landi
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PHONE */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   +998 90 123 45 67
// // // // // // // //                 </h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.openModal}
// // // // // // // //                   className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
// // // // // // // //                 >
// // // // // // // //                   <Plus /> Qarz qo’shish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PRODUCT */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.minusOpen}
// // // // // // // //                   className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <CircleMinus /> Qarz ayirish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* SUM */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   2,500,000 so’m
// // // // // // // //                 </h2>

// // // // // // // //                 <button onClick={this.historyOpen} className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
// // // // // // // //                   <Clock /> Tarix
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* STATUS */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
// // // // // // // //                   To’lanmagan
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //             </div>
// // // // // // // //             <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

// // // // // // // //               {/* NAME */}
// // // // // // // //               <div className='text-center w-[155px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <Check /> To'landi
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PHONE */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   +998 90 123 45 67
// // // // // // // //                 </h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.openModal}
// // // // // // // //                   className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
// // // // // // // //                 >
// // // // // // // //                   <Plus /> Qarz qo’shish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PRODUCT */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.minusOpen}
// // // // // // // //                   className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <CircleMinus /> Qarz ayirish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* SUM */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   2,500,000 so’m
// // // // // // // //                 </h2>

// // // // // // // //                 <button onClick={this.historyOpen} className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
// // // // // // // //                   <Clock /> Tarix
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* STATUS */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
// // // // // // // //                   To’lanmagan
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //             </div>
// // // // // // // //             <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

// // // // // // // //               {/* NAME */}
// // // // // // // //               <div className='text-center w-[155px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <Check /> To'landi
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PHONE */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   +998 90 123 45 67
// // // // // // // //                 </h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.openModal}
// // // // // // // //                   className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
// // // // // // // //                 >
// // // // // // // //                   <Plus /> Qarz qo’shish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PRODUCT */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.minusOpen}
// // // // // // // //                   className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <CircleMinus /> Qarz ayirish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* SUM */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   2,500,000 so’m
// // // // // // // //                 </h2>

// // // // // // // //                 <button onClick={this.historyOpen} className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
// // // // // // // //                   <Clock /> Tarix
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* STATUS */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
// // // // // // // //                   To’lanmagan
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //             </div>
// // // // // // // //             <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

// // // // // // // //               {/* NAME */}
// // // // // // // //               <div className='text-center w-[155px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <Check /> To'landi
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PHONE */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   +998 90 123 45 67
// // // // // // // //                 </h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.openModal}
// // // // // // // //                   className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
// // // // // // // //                 >
// // // // // // // //                   <Plus /> Qarz qo’shish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* PRODUCT */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

// // // // // // // //                 <button
// // // // // // // //                   onClick={this.minusOpen}
// // // // // // // //                   className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
// // // // // // // //                   <CircleMinus /> Qarz ayirish
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* SUM */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // // // // // // //                   2,500,000 so’m
// // // // // // // //                 </h2>

// // // // // // // //                 <button onClick={this.historyOpen} className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
// // // // // // // //                   <Clock /> Tarix
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* STATUS */}
// // // // // // // //               <div className='text-center w-[210px] mt-[20px]'>
// // // // // // // //                 <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

// // // // // // // //                 <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
// // // // // // // //                   To’lanmagan
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>



// // // // // // // //         {/* MODAL */}
// // // // // // // //         {this.state.showModal && (
// // // // // // // //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // // // //             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">

// // // // // // // //               <div className="flex items-center justify-between mb-4">
// // // // // // // //                 <h2 className="text-xl font-semibold">Qarz qo’shish</h2>

// // // // // // // //                 <button onClick={this.closeModal} className="text-2xl">
// // // // // // // //                   ×
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* USER BOX */}
// // // // // // // //               <div className="bg-gray-100 rounded-xl p-4 mb-5">
// // // // // // // //                 <div className="flex items-center justify-between">
// // // // // // // //                   <div className="flex items-center gap-3">

// // // // // // // //                     <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
// // // // // // // //                       👤
// // // // // // // //                     </div>

// // // // // // // //                     <div>
// // // // // // // //                       <h3 className="font-semibold">Ali Valiyev</h3>
// // // // // // // //                       <p className="text-sm text-gray-500">+998 90 123 45 67</p>
// // // // // // // //                     </div>

// // // // // // // //                   </div>
// // // // // // // //                   <p className="text-sm text-gray-600">19.09.2025</p>
// // // // // // // //                 </div>

// // // // // // // //                 <hr className="my-3" />

// // // // // // // //                 <div className="flex items-center justify-between text-sm">
// // // // // // // //                   <span className="text-blue-600 font-medium">Oldingi qarzi</span>
// // // // // // // //                   <span className="text-gray-600">2,500,000 so’m</span>
// // // // // // // //                 </div>

// // // // // // // //               </div>

// // // // // // // //               {/* INPUTS */}
// // // // // // // //               <div className="space-y-3">

// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   placeholder="Qarz summasi..."
// // // // // // // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // // // // // // //                 />

// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Mahsulot nomi..."
// // // // // // // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // // // // // // //                 />

// // // // // // // //                 <input
// // // // // // // //                   type="date"
// // // // // // // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // // // // // // //                 />

// // // // // // // //               </div>

// // // // // // // //               <button
// // // // // // // //                 className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
// // // // // // // //               >
// // // // // // // //                 Qo’shish
// // // // // // // //               </button>

// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}




// // // // // // // //         {this.state.minusModal && (
// // // // // // // //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // // // //             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">

// // // // // // // //               <div className="flex items-center justify-between mb-4">
// // // // // // // //                 <h2 className="text-xl font-semibold">Qarz ayirish</h2>

// // // // // // // //                 <button onClick={this.minusClose} className="text-2xl">
// // // // // // // //                   ×
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* USER BOX */}
// // // // // // // //               <div className="bg-gray-100 rounded-xl p-4 mb-5">
// // // // // // // //                 <div className="flex items-center justify-between">
// // // // // // // //                   <div className="flex items-center gap-3">

// // // // // // // //                     <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
// // // // // // // //                       👤
// // // // // // // //                     </div>

// // // // // // // //                     <div>
// // // // // // // //                       <h3 className="font-semibold">Ali Valiyev</h3>
// // // // // // // //                       <p className="text-sm text-gray-500">+998 90 123 45 67</p>
// // // // // // // //                     </div>

// // // // // // // //                   </div>
// // // // // // // //                   <p className="text-sm text-gray-600">19.09.2025</p>
// // // // // // // //                 </div>

// // // // // // // //                 <hr className="my-3" />

// // // // // // // //                 <div className="flex items-center justify-between text-sm">
// // // // // // // //                   <span className="text-blue-600 font-medium">Oldingi qarzi</span>
// // // // // // // //                   <span className="text-gray-600">2,500,000 so’m</span>
// // // // // // // //                 </div>

// // // // // // // //               </div>

// // // // // // // //               {/* INPUTS */}
// // // // // // // //               <div className="space-y-3">

// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   placeholder="Qarz summasi..."
// // // // // // // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // // // // // // //                 />

// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Mahsulot nomi..."
// // // // // // // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // // // // // // //                 />

// // // // // // // //                 <input
// // // // // // // //                   type="date"
// // // // // // // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // // // // // // //                 />

// // // // // // // //               </div>

// // // // // // // //               <button
// // // // // // // //                 className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
// // // // // // // //               >
// // // // // // // //                 Qo’shish
// // // // // // // //               </button>

// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //         {this.state.historyModal && (
// // // // // // // //           <div className='fixed inset-0 bg-black/50 z-20'>
// // // // // // // //           <div className="w-full bg-white rounded-[40px] container p-[15px]">
// // // // // // // //           <div className='flex items-center justify-between mb-[49px]'>
// // // // // // // //             <h2 className="justify-start text-black text-4xl font-bold">Ali Valiyev - Qarz tarixi</h2>
// // // // // // // //             <button onClick={this.historyClose} className="text-[50px]">
// // // // // // // //               ×
// // // // // // // //             </button>
// // // // // // // //           </div>

// // // // // // // //           <div className='flex justify-between items-center'>
// // // // // // // //             <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
// // // // // // // //               <p className="justify-start text-black text-xl font-normal">Jami olgan</p>
// // // // // // // //               <h2 className="justify-start text-red-600 text-2xl font-bold">4,500,000 so’m</h2>
// // // // // // // //             </div>
// // // // // // // //             <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
// // // // // // // //               <p className="justify-start text-black text-xl font-normal">Joriy qarz</p>
// // // // // // // //               <h2 className="justify-start text-indigo-700 text-2xl font-bold">2,500,000 so’m</h2>
// // // // // // // //             </div>
// // // // // // // //             <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
// // // // // // // //               <p className="justify-start text-black text-xl font-normal">Sro’q</p>
// // // // // // // //               <h2 className="justify-start text-purple-600 text-2xl font-bold">2,500,000 so’m</h2>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="w-full bg-white rounded-[20px] border-2 border-zinc-400 mt-[40px] px-[29px] py-[40px] mb-[40px]" >
// // // // // // // //             <h2 className="justify-start text-black text-2xl font-bold mb-[30px]">Mijoz ma’lumotlari</h2>
// // // // // // // //           {/* </div> */}
// // // // // // // //             <div className='flex justify-between'>
// // // // // // // //               <div>
// // // // // // // //                 <p className="justify-start text-neutral-500 text-xl font-normal">To’liq ism</p>
// // // // // // // //                 <h2 className="justify-start text-black text-xl font-bold">Ali Valiyev</h2>
// // // // // // // //               </div>
// // // // // // // //               <div>
// // // // // // // //                 <p className="justify-start text-neutral-500 text-xl font-normal">Telfon raqami</p>
// // // // // // // //                 <h2 className="justify-start text-black text-xl font-bold">+998 90 123 45 67</h2>
// // // // // // // //               </div>
// // // // // // // //               <div>
// // // // // // // //                 <p className="justify-start text-neutral-500 text-xl font-normal">Ro’yxatga olingan sana</p>
// // // // // // // //                 <h2 className="justify-start text-black text-xl font-bold">19.09.2025, 19:50</h2>
// // // // // // // //               </div>
// // // // // // // //               </div>
// // // // // // // //           </div>

// // // // // // // //           <div className='w-full py-[11px] border-[#E9E9E9] border-2 rounded-[10px] text-center mb-[30px]'>
// // // // // // // //             <h2 className="justify-start text-black text-xl font-bold">Qarz tarixi (2)</h2>
// // // // // // // //           </div>

// // // // // // // //           <div className='w-full py-[19px] px-[20px] border-[#FF0000] bg-[#FFEFEF] border-2 rounded-[20px] text-center mb-[30px]'>

// // // // // // // //             <div className='flex gap-[19px] items-center'>
// // // // // // // //               <span><p className='bg-[#FF0000] rounded-full text-white font-bold py-[6px] px-[14px]'>Qazr #1</p></span>
// // // // // // // //               <p className="justify-start text-red-600 text-2xl font-bold">2,500,000 so’m</p>
// // // // // // // //               </div>

// // // // // // // //               <span className='flex items-center gap-[17px] mt-[28px]'>
// // // // // // // //               <Calendar /> 
// // // // // // // //               <p className="justify-start text-black text-xl font-bold">19.09.2025, 19:50</p>
// // // // // // // //               </span>
// // // // // // // //           </div>
// // // // // // // //           <div className='w-full py-[19px] px-[20px] border-[#FF0000] bg-[#FFEFEF] border-2 rounded-[20px] text-center mb-[30px]'>

// // // // // // // //             <div className='flex gap-[19px] items-center'>
// // // // // // // //               <span><p className='bg-[#FF0000] rounded-full text-white font-bold py-[6px] px-[14px]'>Qazr #1</p></span>
// // // // // // // //               <p className="justify-start text-red-600 text-2xl font-bold">2,500,000 so’m</p>
// // // // // // // //               </div>

// // // // // // // //               <span className='flex items-center gap-[17px] mt-[28px]'>
// // // // // // // //               <Calendar /> 
// // // // // // // //               <p className="justify-start text-black text-xl font-bold">19.09.2025, 19:50</p>
// // // // // // // //               </span>
// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //         </div>
// // // // // // // //         )}




// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }
// // // // // // // // }






















// import React, { Component } from 'react';
// import Navbar from "../Components/Navbar";
// import { Check, Plus, CircleMinus, Clock } from 'lucide-react';
// import { collection, addDoc, updateDoc, doc, getDocs, deleteDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false,
//       minusModal: false,
//       historyModal: false,
//       customers: [],
//       selectedCustomer: null,
//       loanAmount: "",
//       comment: "",
//       loanDate: "",
//       newCustomerName: "",
//     };
//   }

//   componentDidMount() {
//     this.fetchCustomers();
//   }

//   fetchCustomers = async () => {
//     const querySnapshot = await getDocs(collection(db, "customers"));
//     const customers = [];
//     querySnapshot.forEach((doc) => {
//       customers.push({ id: doc.id, ...doc.data() });
//     });
//     this.setState({ customers });
//   }

//   // MODAL FUNCTIONS
//   openModal = (customer = null) => this.setState({ showModal: true, selectedCustomer: customer });
//   closeModal = () => this.setState({ showModal: false, selectedCustomer: null, loanAmount: "", comment: "", loanDate: "", newCustomerName: "" });

//   minusOpen = (customer) => this.setState({ minusModal: true, selectedCustomer: customer });
//   minusClose = () => this.setState({ minusModal: false, selectedCustomer: null, loanAmount: "", comment: "", loanDate: "" });

//   historyOpen = (customer) => this.setState({ historyModal: true, selectedCustomer: customer });
//   historyClose = () => this.setState({ historyModal: false, selectedCustomer: null });

//   // ADD LOAN
//   handleAddLoan = async () => {
//     const { selectedCustomer, loanAmount, comment, loanDate } = this.state;
//     if (!loanAmount || !loanDate) return alert("Loan amount and date are required");

//     const customerRef = doc(db, "customers", selectedCustomer.id);
//     await updateDoc(customerRef, {
//       loanAmount: (selectedCustomer.loanAmount || 0) + parseFloat(loanAmount),
//       history: [
//         ...(selectedCustomer.history || []),
//         { type: "added", amount: parseFloat(loanAmount), comment, date: loanDate }
//       ]
//     });

//     await this.fetchCustomers();
//     this.closeModal();
//   }

//   // SUBTRACT LOAN
//   handleMinusLoan = async () => {
//     const { selectedCustomer, loanAmount, comment, loanDate } = this.state;
//     if (!loanAmount || !loanDate) return alert("Loan amount and date are required");

//     const newAmount = (selectedCustomer.loanAmount || 0) - parseFloat(loanAmount);

//     const customerRef = doc(db, "customers", selectedCustomer.id);

//     if (newAmount <= 0) {
//       // Fully paid, delete customer
//       await deleteDoc(customerRef);
//     } else {
//       await updateDoc(customerRef, {
//         loanAmount: newAmount,
//         history: [
//           ...(selectedCustomer.history || []),
//           { type: "paid", amount: parseFloat(loanAmount), comment, date: loanDate }
//         ]
//       });
//     }

//     await this.fetchCustomers();
//     this.minusClose();
//   }

//   // ADD NEW CUSTOMER
//   handleAddNewCustomer = async () => {
//     const { newCustomerName, stNumber, loanAmount, comment, loanDate } = this.state;
//     if (!newCustomerName || !loanAmount || !loanDate) return alert("All fields are required");

//     await addDoc(collection(db, "customers"), {
//       name: newCustomerName,
//       loanAmount: parseFloat(loanAmount),
//       stNumber: parseFloat(stNumber),
//       history: [{ type: "added", amount: parseFloat(loanAmount), comment, date: loanDate }]
//     });

//     await this.fetchCustomers();
//     this.closeModal();
//   }

//   // MARK LOAN AS FULLY PAID
//   handleMarkPaid = async (customer) => {
//     if (!customer.loanAmount || customer.loanAmount <= 0) return;

//     const customerRef = doc(db, "customers", customer.id);

//     await deleteDoc(customerRef); // Delete customer after full payment

//     await this.fetchCustomers();
//   }

//   render() {
//     const { showModal, minusModal, historyModal, customers, selectedCustomer } = this.state;

//     return (
//       <div>
//         <Navbar />

//         <div className='container pt-[70px]'>
//           <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px]'>
//             <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>

//             <button
//               onClick={() => this.openModal(null)}
//               className='bg-[#D1A84BED] rounded-[30px] w-full p-[21px] text-[40px] font-extrabold text-[#fff] mt-[30px]'
//             >
//               + QARZ QO’SHISH
//             </button>

//             {/* Search Input */}

//             <div className='mt-[30px] flex gap-[30px]'>
//               <input className='max-w-[883px] w-full h-[52px] border-[1px] px-[20px] py-[10px] outline-none rounded-[15px]' type="search" name="" id="" placeholder='Mijoz qidiruv...'/>

//               {/* Download and List */}

//               <div className='flex gap-[40px]'>
//                 <button className='max-w-[164px] w-full h-[52px] bg-[#F5F5F5] rounded-[15px] px-[10px]'><a className='text-[20px]' href="#!">PDF/EXCEL</a></button>
//                 <button className='max-w-[191px] w-full h-[52px] bg-[#00D73D] rounded-[15px] px-[10px]'><a className='text-[25px] text-[#fff]' href="#!">QARZDORLAR</a></button>
//               </div>
//             </div>

//             {customers.map((customer, index) => (
//               <div key={index} className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

//                 <div className='text-center w-[155px] mt-[20px]'>
//                   <h2 className="text-black text-xl font-bold mb-[25px]">{customer.name}</h2>
//                   <button
//                     onClick={() => this.handleMarkPaid(customer)}
//                     className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]' >
//                     <Check /> To'landi
//                   </button>
//                 </div>

//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">{customer.phone || "+998 90 123 45 67"}</h2>
//                   <button onClick={() => this.openModal(customer)} className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'>
//                     <Plus /> Qarz qo’shish
//                   </button>
//                 </div>

//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <button onClick={() => this.minusOpen(customer)} className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
//                     <CircleMinus /> Qarz ayirish
//                   </button>
//                 </div>

//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">{customer.loanAmount} so’m</h2>
//                   <button onClick={() => this.historyOpen(customer)} className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
//                     <Clock /> Tarix
//                   </button>
//                 </div>

//                 <div className='text-center w-[210px] mt-[20px]'>
//                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">{customer.lastDate || "19.09.2025"}</h2>
//                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
//                     {customer.loanAmount > 0 ? "To’lanmagan" : "To’langan"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- MODALS --- */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-semibold">{selectedCustomer ? "Qarz qo’shish" : "Yangi mijoz qo'shish"}</h2>
//                 <button onClick={this.closeModal} className="text-2xl">×</button>
//               </div>
//               <div className="space-y-3">
//                 {!selectedCustomer && (
//                   <input type="text" placeholder="Mijoz ismi..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ newCustomerName: e.target.value })} />
//                 )}
//                 <input type="number" placeholder="Mijoz telefon nomeri..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ stNumber: e.target.value })} />
//                 <input type="number" placeholder="Mijoz telefon nomeri..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ loanAmount: e.target.value })} />
//                 <input type="number" placeholder="Qarz summasi..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ loanAmount: e.target.value })} />
//                 <textarea placeholder="Izoh..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ comment: e.target.value })}></textarea>
//                 <input type="date" className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ loanDate: e.target.value })} />
//               </div>
//               <button
//                 onClick={selectedCustomer ? this.handleAddLoan : this.handleAddNewCustomer}
//                 className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
//               >
//                 Qo’shish
//               </button>
//             </div>
//           </div>
//         )}

//         {minusModal && selectedCustomer && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-semibold">Qarz ayirish</h2>
//                 <button onClick={this.minusClose} className="text-2xl">×</button>
//               </div>
//               <div className="space-y-3">
//                 <input type="number" placeholder="Qarz summasi..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ loanAmount: e.target.value })} />
//                 <textarea placeholder="Izoh..." className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ comment: e.target.value })}></textarea>
//                 <input type="date" className="w-full p-3 bg-gray-100 rounded-xl outline-none" onChange={e => this.setState({ loanDate: e.target.value })} />
//               </div>
//               <button onClick={this.handleMinusLoan} className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg">Ayirish</button>
//             </div>
//           </div>
//         )}

//         {/* HISTORY MODAL */}
//         {historyModal && selectedCustomer && (
//           <div className='fixed inset-0 bg-black/50 z-20 flex items-center justify-center'>
//             <div className="w-full max-w-4xl bg-white rounded-[40px] p-[15px]">
//               <div className='flex items-center justify-between mb-[20px]'>
//                 <h2 className="justify-start text-black text-4xl font-bold">{selectedCustomer.name} - Qarz tarixi</h2>
//                 <button onClick={this.historyClose} className="text-[50px]">×</button>
//               </div>

//               {/* TABLE HEADINGS */}
//               <div className="flex justify-between border-b-2 p-2 font-bold text-lg">
//                 <span>Price</span>
//                 <span>Comment</span>
//                 <span>Date</span>
//               </div>

//               {selectedCustomer.history?.map((h, i) => (
//                 <div key={i} className="flex justify-between items-center mb-2 border-b p-2">
//                   <span>{h.amount} so’m</span>
//                   <span>{h.comment || ""}</span>
//                   <span>{h.date}</span>
//                 </div>
//               )) || <p>No history yet.</p>}
//             </div>
//           </div>
//         )}

//       </div>
//     );
//   }
// }














import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { Check, Plus, CircleMinus, Clock } from "lucide-react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import * as XLSX from "xlsx";
import { Navigate } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      minusModal: false,
      historyModal: false,
      goList: false,

      customers: [],
      filteredCustomers: [],
      selectedCustomer: null,

      name: "",
      phone: "",
      loanAmount: "",
      comment: "",
      loanDate: "",
      search: "",
    };
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  fetchCustomers = async () => {
    const snap = await getDocs(collection(db, "customers"));
    const customers = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    this.setState({ customers, filteredCustomers: customers });
  };

  /* ================= SEARCH ================= */
  handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = this.state.customers.filter((c) =>
      c.name.toLowerCase().includes(search)
    );
    this.setState({ search, filteredCustomers: filtered });
  };

  /* ================= EXCEL ================= */
  exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(this.state.customers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "Qarzdorlar_List.xlsx");
  };

  /* ================= MODALS ================= */
  openAdd = () =>
    this.setState({
      showModal: true,
      selectedCustomer: null,
      name: "",
      phone: "",
      loanAmount: "",
      comment: "",
      loanDate: "",
    });

  openPlus = (c) =>
    this.setState({ showModal: true, selectedCustomer: c });

  openMinus = (c) =>
    this.setState({ minusModal: true, selectedCustomer: c });

  openHistory = (c) =>
    this.setState({ historyModal: true, selectedCustomer: c });

  closeAll = () =>
    this.setState({
      showModal: false,
      minusModal: false,
      historyModal: false,
      selectedCustomer: null,
      comment: null,
    });

  /* ================= ADD CUSTOMER ================= */
  addCustomer = async () => {
    const { name, phone, loanAmount, comment, loanDate } = this.state;
    if (!name || !phone || !loanAmount || !loanDate)
      return alert("Fill all fields");

    await addDoc(collection(db, "customers"), {
      name,
      phone,
      loanAmount: Number(loanAmount),
      status: "unpaid",
      lastDate: loanDate,
      history: [
        {
          type: "Added",
          amount: Number(loanAmount),
          comment,
          date: loanDate,
        },
      ],
    });

    this.fetchCustomers();
    this.closeAll();
  };

  /* ================= ADD LOAN ================= */
  addLoan = async () => {
    const { selectedCustomer, loanAmount, comment, loanDate } = this.state;
    if (!loanAmount || !loanDate) return alert("Fill fields");

    await updateDoc(doc(db, "customers", selectedCustomer.id), {
      loanAmount: selectedCustomer.loanAmount + Number(loanAmount),
      status: "unpaid",
      lastDate: loanDate,
      history: [
        ...(selectedCustomer.history || []),
        {
          type: "Added",
          amount: Number(loanAmount),
          comment,
          date: loanDate,
        },
      ],
    });

    this.fetchCustomers();
    this.closeAll();
  };

  /* ================= MINUS LOAN ================= */
  minusLoan = async () => {
    const { selectedCustomer, loanAmount, comment, loanDate } = this.state;
    if (!loanAmount || !loanDate) return alert("Fill fields");

    const newAmount = selectedCustomer.loanAmount - Number(loanAmount);

    if (newAmount <= 0) {
      await updateDoc(doc(db, "customers", selectedCustomer.id), {
        loanAmount: 0,
        status: "paid",
        lastDate: loanDate,
        history: [
          ...(selectedCustomer.history || []),
          {
            type: "Paid",
            amount: Number(loanAmount),
            comment,
            date: loanDate,
          },
        ],
      });
    } else {
      await updateDoc(doc(db, "customers", selectedCustomer.id), {
        loanAmount: newAmount,
        lastDate: loanDate,
        history: [
          ...(selectedCustomer.history || []),
          {
            type: "Minused",
            amount: Number(loanAmount),
            comment,
            date: loanDate,
          },
        ],
      });
    }

    this.fetchCustomers();
    this.closeAll();
  };

  /* ================= PAID ================= */
  markPaid = async (c) => {
    await updateDoc(doc(db, "customers", c.id), {
      loanAmount: 0,
      status: "paid",
    });
    this.fetchCustomers();
  };

  render() {
    if (this.state.goList) return <Navigate to="/list_qarz" />;

    return (
      <div>
        <Navbar />

        <div className="container mx-auto pt-24 px-3">
          <h1 className="text-2xl font-bold text-center mb-6">
            So‘nggi qarzdorlar
          </h1>

          <button
            onClick={this.openAdd}
            className="w-full h-[80px] rounded-[30px] bg-[#D1A84BED] text-white text-[40px] py-[4px] mb-6"
          >
            + QARZ QO‘SHISH
          </button>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="search"
              placeholder="Mijoz qidirish..."
              className="border pl-[25px] w-full h-[50px] rounded-[15px]"
              onChange={this.handleSearch}
            />

            <button
              onClick={this.exportExcel}
              className="bg-gray-200 p-3 rounded-[15px] w-[160px] h-[50px]"
            >
              PDF / EXCEL
            </button>

            <button
              onClick={() => this.setState({ goList: true })}
              className="bg-green-500 text-white p-3 rounded-[15px] h-[50px]"
            >
              QARZDORLAR
            </button>
          </div>

          <div className="grid grid-cols-5 bg-gray-100 pl-[20px] py-[20px] font-bold">
            <div>ISM</div>
            <div>TELEFON</div>
            <div>Sana</div>
            <div>QARZ  SUMMASI</div>
            <div>HOLAT</div>
            {/* <div>AMALLAR</div> */}
          </div>

          {this.state.filteredCustomers.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl p-4 mb-4  md:flex-row justify-between gap-4"
            >
              <div className="flex gap-[100px]">
                <h2 className="font-bold w-[102px] mr-[75px]">{c.name}</h2>
                <p className="w-[186px]">{c.phone}</p>
                <p className="ml-[-20px] w-[124px] mr-[110px]">{c.lastDate}</p>
                <p className="w-[124px]">{c.loanAmount} so‘m</p>
                <p
                  className={`font-bold ${c.status === "paid" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {c.status === "paid" ? "To‘langan" : "To‘lanmagan"}
                </p>
              </div>

              <div className="flex mt-[25px] gap-2 ">
                <button
                  onClick={() => this.markPaid(c)}
                  className="bg-green-500 text-white mr-[200px] ml-[200px] px-4 py-2 rounded-xl flex items-center gap-1"
                >
                  <Check size={18} /> To‘landi
                </button>

                <button
                  onClick={() => this.openPlus(c)}
                  className="bg-blue-500  mr-[200px] text-white px-4 py-2 rounded-xl flex items-center gap-1"
                >
                  <Plus size={18} /> Qarz qo‘shish
                </button>

                <button
                  onClick={() => this.openMinus(c)}
                  className="bg-red-500  mr-[160px] text-white px-4 py-2 rounded-xl flex items-center gap-1"
                >
                  <CircleMinus size={18} /> Qarz ayirish
                </button>

                <button
                  onClick={() => this.openHistory(c)}
                  className="border px-4 py-2 rounded-xl flex items-center gap-1"
                >
                  <Clock size={18} /> Tarix
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODALS ================= */}
        {(this.state.showModal ||
          this.state.minusModal ||
          this.state.historyModal) && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
              <div className="bg-white max-w-[950px] h-[860px] w-full rounded-xl p-6">
                {/* ADD / PLUS */}
                {this.state.showModal && (
                  <>
                    <h2 className="text-[30px] font-bold mb-[40px]">
                      {this.state.selectedCustomer
                        ? "Qarz qo‘shish"
                        : "Yangi Qarzdor Qo'shish"}
                    </h2>

                    {!this.state.selectedCustomer && (
                      <>
                        <div className="flex gap-[44px]">
                          <label htmlFor="ISM">ISM</label><br /><br />
                          <input
                            className="input border-[2px] rounded-[15px] max-w-[400px] w-full h-[60px] px-[20px]"
                            placeholder="Qarzdor ismini kiriting"
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                          /> <br />

                          <label htmlFor="Tel">Telefon raqam</label><br></br>
                          <input
                            className="input border-[2px] rounded-[15px] max-w-[400px] w-full h-[60px] px-[20px]"
                            placeholder="+998 XX XXX XX XX"
                            onChange={(e) =>
                              this.setState({ phone: e.target.value })
                            }
                          /> <br />
                        </div>
                      </>
                    )}
                      <div className="flex gap-[44px] mt-[25px]">

                    <label htmlFor="QARZ">Qarz summasi</label><br /><br />
                    <input
                      className="input border-[2px] rounded-[15px] max-w-[400px] w-full h-[60px] px-[20px]"
                      placeholder="Masalan: 500 000 so'm"
                      type="number"
                      onChange={(e) =>
                        this.setState({ loanAmount: e.target.value })
                      }
                    /> <br />

                    <label htmlFor="SANA">Sana</label><br /><br />
                    <input
                      className="input border-[2px] rounded-[15px] max-w-[400px] w-full h-[60px] px-[20px]"
                      type="date"
                      onChange={(e) =>
                        this.setState({ loanDate: e.target.value })
                      }
                    /> <br />

                      </div>

                      <div className="flex gap-[44px] mt-[25px]">

                    <label htmlFor="COM">Izoh</label><br /><br />
                    <textarea
                      className="input border-[2px] rounded-[15px] w-full h-[100px] px-[20px]"
                      placeholder="Izoh"
                      onChange={(e) =>
                        this.setState({ comment: e.target.value })
                      }
                    /> <br />
                      </div>

                    <button
                      onClick={
                        this.state.selectedCustomer
                          ? this.addLoan
                          : this.addCustomer
                      }
                      className="bg-green-500 text-white w-full py-3 rounded-xl mt-4"
                    >
                      Saqlash
                    </button>
                  </>
                )}

                {/* MINUS */}
                {this.state.minusModal && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Qarz ayirish</h2>
                    <input
                      className="input"
                      type="number"
                      placeholder="Summa"
                      onChange={(e) =>
                        this.setState({ loanAmount: e.target.value })
                      }
                    />
                    <input
                      className="input"
                      type="date"
                      onChange={(e) =>
                        this.setState({ loanDate: e.target.value })
                      }
                    />
                    <textarea
                      className="input"
                      placeholder="Izoh"
                      onChange={(e) =>
                        this.setState({ comment: e.target.value })
                      }
                    />
                    <button
                      onClick={this.minusLoan}
                      className="bg-red-500 text-white w-full py-3 rounded-xl mt-4"
                    >
                      Ayirish
                    </button>
                  </>
                )}

                {/* HISTORY */}
                {this.state.historyModal && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Qarz tarixi</h2>
                    {this.state.selectedCustomer.history?.map((h, i) => (
                      <div key={i} className="border-b py-2">
                        <p>
                          <b>{h.type}</b> — {h.amount} so‘m
                        </p>
                        <p>{h.comment}</p>
                        <p className="text-sm">{h.date}</p>
                      </div>
                    ))}
                  </>
                )}

                <button
                  onClick={this.closeAll}
                  className="mt-4 w-full border py-2 rounded-xl"
                >
                  Yopish
                </button>
              </div>
            </div>
          )}
      </div>
    );
  }
}