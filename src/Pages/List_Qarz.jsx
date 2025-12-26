// // // import React, { Component } from 'react'

// // // // Companents{
// // // import Navbar from "../Components/Navbar";
// // // // }

// // // // Icons{
// // // import { Search } from 'lucide-react';
// // // import { Download } from 'lucide-react';
// // // import { ArrowRight } from 'lucide-react';
// // // import { Check } from 'lucide-react';
// // // import { Plus } from 'lucide-react';
// // // import { CircleMinus } from 'lucide-react';
// // // import { Clock } from 'lucide-react';
// // // // }

// // // export default class List_Qarz extends Component {

// // //   constructor(props) {
// // //     super(props);

// // //     this.state = {
// // //       showModal: false,
// // //       minusModal: false,
// // //       historyModal: false,
// // //     };
// // //   }

// // //   openModal = () => {
// // //     this.setState({ showModal: true });
// // //   };

// // //   closeModal = () => {
// // //     this.setState({ showModal: false });
// // //   };


// // //   minusOpen = () => {
// // //     this.setState({ minusModal: true });
// // //   };

// // //   minusClose = () => {
// // //     this.setState({ minusModal: false });
// // //   };


// // //   historyOpen = () => {
// // //     this.setState({ historyModal: true });
// // //   };

// // //   historyClose = () => {
// // //     this.setState({ historyModal: false });
// // //   };
// // //   render() {
// // //     return (
// // //       <div>
// // //         <Navbar></Navbar>

// // //         <div className='container'>
// // //           <div className='bg-[#FFFFFF] rounded-[20px] py-[17px] px-[25px] mt-[40px]'>
// // //             <h1 className='text-[25px] font-bold text-[#000] text-center'>So’nggi qarzdorlar ro’yxati</h1>
// // //             <div className='flex gap-[25px] items-center mt-[40px] justify-between'>
// // //               <button className='flex gap-[4px] items-center text-[20px] font-normal bg-[#F5F5F5] py-[13px] px-[6px] rounded-[15px]'><Download />PDF / Excel</button>
// // //               <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px] text-[#fff]'>Ogohlantirish</button>
// // //               <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#E1FF00] px-[11px] py-[11px] rounded-[15px] text-[#000]'>Filtirlash</button>
// // //               <button className='bg-[#1C9B1C] rounded-[15px] w-[52%] p-[10px] text-[30px] font-extrabold text-[#fff]'>+ QARZ QO’SHISH</button>
// // //             </div>
// // //             <div className='flex mt-[30px] justify-between gap-[30px] items-center'>
// // //               <form action="" className='flex items-center'>
// // //                 <Search className='mr-[-55px] z-10' />
// // //                 <input className='py-[13px] ml-[25px] px-[45px] bg-[#F5F5F5] rounded-[15px] text-[25px] w-[850px]' type="text" placeholder='Mijoz qidiruv...' />
// // //               </form>
// // //               <button className='flex gap-[4px] items-center text-[25px] font-semibold text-[#fff]  bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>Eng ko’p qarzdorlar</button>
// // //             </div>
// // //             <div>

// // //               <div className="w-[1150px] h-12 bg-neutral-100 rounded-[10px] mt-[30px] flex justify-between items-center px-[30px]">
// // //                 <div className='w-[155px]'>
// // //                   <p className="justify-start text-stone-500 text-xl font-bold">ISM</p>
// // //                 </div>
// // //                 <div className='w-[205px]'>
// // //                   <p className="justify-start text-stone-500 text-xl font-bold">TELEFON</p>
// // //                 </div>
// // //                 <div className='w-[190px]'>
// // //                   <p className="justify-start text-stone-500 text-xl font-bold">MAHSULOT</p>
// // //                 </div>
// // //                 <div className='w-[159px]'>
// // //                   <p className="justify-start text-stone-500 text-xl font-bold">QARZ SUMMASI</p>
// // //                 </div>
// // //                 <div className='w-[188px]'>
// // //                   <p className="justify-start text-stone-500 text-xl font-bold">HOLATI VA SANASI</p>
// // //                 </div>
// // //               </div>

// // //               <div className='flex justify-between text-[#fff] px-[35px] border-b-2 pb-[25px]'>

// // //                 {/* NAME */}
// // //                 <div className='text-center w-[155px] mt-[20px]'>
// // //                   <h2 className="text-black text-xl font-bold mb-[25px]">Ali Valiyev</h2>

// // //                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#00D73D] px-[11px] py-[11px] rounded-[15px]'>
// // //                     <Check /> To'landi
// // //                   </button>
// // //                 </div>

// // //                 {/* PHONE */}
// // //                 <div className='text-center w-[210px] mt-[20px]'>
// // //                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // //                     +998 90 123 45 67
// // //                   </h2>

// // //                   <button
// // //                     onClick={this.openModal}
// // //                     className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#443EFF] px-[15px] py-[11px] rounded-[15px]'
// // //                   >
// // //                     <Plus /> Qarz qo’shish
// // //                   </button>
// // //                 </div>

// // //                 {/* PRODUCT */}
// // //                 <div className='text-center w-[210px] mt-[20px]'>
// // //                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">iPhone 14 pro</h2>

// // //                   <button
// // //                     onClick={this.minusOpen}
// // //                     className='flex gap-[13px] items-center text-[25px] font-semibold bg-[#FF0004] px-[15px] py-[11px] rounded-[15px]'>
// // //                     <CircleMinus /> Qarz ayirish
// // //                   </button>
// // //                 </div>

// // //                 {/* SUM */}
// // //                 <div className='text-center w-[210px] mt-[20px]'>
// // //                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">
// // //                     2,500,000 so’m
// // //                   </h2>

// // //                   <button onClick={this.historyOpen} className='flex gap-[17px] items-center text-[25px] font-semibold border-2 border-[#000] px-[30px] py-[11px] rounded-[15px] text-[#000]'>
// // //                     <Clock /> Tarix
// // //                   </button>
// // //                 </div>

// // //                 {/* STATUS */}
// // //                 <div className='text-center w-[210px] mt-[20px]'>
// // //                   <h2 className="text-stone-500 text-xl font-bold mb-[25px]">19.09.2025</h2>

// // //                   <button className='flex gap-[4px] items-center text-[25px] font-semibold bg-[#FFCFCF] px-[15px] py-[11px] rounded-[15px] text-[#FF0000]'>
// // //                     To’lanmagan
// // //                   </button>
// // //                 </div>

// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>




// // //         {/* MODAL */}

// // //         {this.state.showModal && (
// // //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // //             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">

// // //               <div className="flex items-center justify-between mb-4">
// // //                 <h2 className="text-xl font-semibold">Qarz qo’shish</h2>

// // //                 <button onClick={this.closeModal} className="text-2xl">
// // //                   ×
// // //                 </button>
// // //               </div>

// // //               {/* USER BOX */}

// // //               <div className="bg-gray-100 rounded-xl p-4 mb-5">
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-3">

// // //                     <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
// // //                       👤
// // //                     </div>

// // //                     <div>
// // //                       <h3 className="font-semibold">Ali Valiyev</h3>
// // //                       <p className="text-sm text-gray-500">+998 90 123 45 67</p>
// // //                     </div>

// // //                   </div>
// // //                   <p className="text-sm text-gray-600">19.09.2025</p>
// // //                 </div>

// // //                 <hr className="my-3" />

// // //                 <div className="flex items-center justify-between text-sm">
// // //                   <span className="text-blue-600 font-medium">Oldingi qarzi</span>
// // //                   <span className="text-gray-600">2,500,000 so’m</span>
// // //                 </div>

// // //               </div>

// // //               {/* INPUTS */}

// // //               <div className="space-y-3">

// // //                 <input
// // //                   type="number"
// // //                   placeholder="Qarz summasi..."
// // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // //                 />

// // //                 <input
// // //                   type="text"
// // //                   placeholder="Mahsulot nomi..."
// // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // //                 />

// // //                 <input
// // //                   type="date"
// // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // //                 />

// // //               </div>

// // //               <button
// // //                 className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
// // //               >
// // //                 Qo’shish
// // //               </button>

// // //             </div>
// // //           </div>
// // //         )}




// // //         {this.state.minusModal && (
// // //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // //             <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-xl">

// // //               <div className="flex items-center justify-between mb-4">
// // //                 <h2 className="text-xl font-semibold">Qarz ayirish</h2>

// // //                 <button onClick={this.minusClose} className="text-2xl">
// // //                   ×
// // //                 </button>
// // //               </div>

// // //               {/* USER BOX */}

// // //               <div className="bg-gray-100 rounded-xl p-4 mb-5">
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-3">

// // //                     <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
// // //                       👤
// // //                     </div>

// // //                     <div>
// // //                       <h3 className="font-semibold">Ali Valiyev</h3>
// // //                       <p className="text-sm text-gray-500">+998 90 123 45 67</p>
// // //                     </div>

// // //                   </div>
// // //                   <p className="text-sm text-gray-600">19.09.2025</p>
// // //                 </div>

// // //                 <hr className="my-3" />

// // //                 <div className="flex items-center justify-between text-sm">
// // //                   <span className="text-blue-600 font-medium">Oldingi qarzi</span>
// // //                   <span className="text-gray-600">2,500,000 so’m</span>
// // //                 </div>

// // //               </div>

// // //               {/* INPUTS */}

// // //               <div className="space-y-3">

// // //                 <input
// // //                   type="number"
// // //                   placeholder="Qarz summasi..."
// // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // //                 />

// // //                 <input
// // //                   type="text"
// // //                   placeholder="Mahsulot nomi..."
// // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // //                 />

// // //                 <input
// // //                   type="date"
// // //                   className="w-full p-3 bg-gray-100 rounded-xl outline-none"
// // //                 />

// // //               </div>

// // //               <button
// // //                 className="w-full mt-5 bg-green-500 p-3 rounded-xl text-white font-semibold text-lg"
// // //               >
// // //                 Qo’shish
// // //               </button>

// // //             </div>
// // //           </div>
// // //         )}

// // //         {this.state.historyModal && (
// // //           <div className='fixed inset-0 bg-black/50 z-20'>
// // //             <div className="w-full bg-white rounded-[40px] container p-[15px]">
// // //               <div className='flex items-center justify-between mb-[49px]'>
// // //                 <h2 className="justify-start text-black text-4xl font-bold">Ali Valiyev - Qarz tarixi</h2>
// // //                 <button onClick={this.historyClose} className="text-[50px]">
// // //                   ×
// // //                 </button>
// // //               </div>

// // //               <div className='flex justify-between items-center'>
// // //                 <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
// // //                   <p className="justify-start text-black text-xl font-normal">Jami olgan</p>
// // //                   <h2 className="justify-start text-red-600 text-2xl font-bold">4,500,000 so’m</h2>
// // //                 </div>
// // //                 <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
// // //                   <p className="justify-start text-black text-xl font-normal">Joriy qarz</p>
// // //                   <h2 className="justify-start text-indigo-700 text-2xl font-bold">2,500,000 so’m</h2>
// // //                 </div>
// // //                 <div className="w-96 h-24 bg-white rounded-[20px] border-2 border-zinc-400/75 px-[45px] py-[15px]" >
// // //                   <p className="justify-start text-black text-xl font-normal">Sro’q</p>
// // //                   <h2 className="justify-start text-purple-600 text-2xl font-bold">2,500,000 so’m</h2>
// // //                 </div>
// // //               </div>

// // //               <div className="w-full bg-white rounded-[20px] border-2 border-zinc-400 mt-[40px] px-[29px] py-[40px] mb-[40px]" >
// // //                 <h2 className="justify-start text-black text-2xl font-bold mb-[30px]">Mijoz ma’lumotlari</h2>
// // //                 {/* </div> */}
// // //                 <div className='flex justify-between'>
// // //                   <div>
// // //                     <p className="justify-start text-neutral-500 text-xl font-normal">To’liq ism</p>
// // //                     <h2 className="justify-start text-black text-xl font-bold">Ali Valiyev</h2>
// // //                   </div>
// // //                   <div>
// // //                     <p className="justify-start text-neutral-500 text-xl font-normal">Telfon raqami</p>
// // //                     <h2 className="justify-start text-black text-xl font-bold">+998 90 123 45 67</h2>
// // //                   </div>
// // //                   <div>
// // //                     <p className="justify-start text-neutral-500 text-xl font-normal">Ro’yxatga olingan sana</p>
// // //                     <h2 className="justify-start text-black text-xl font-bold">19.09.2025, 19:50</h2>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className='w-full py-[11px] border-[#E9E9E9] border-2 rounded-[10px] text-center mb-[30px]'>
// // //                 <h2 className="justify-start text-black text-xl font-bold">Qarz tarixi (2)</h2>
// // //               </div>

// // //               <div className='w-full py-[19px] px-[20px] border-[#FF0000] bg-[#FFEFEF] border-2 rounded-[20px] text-center mb-[30px]'>

// // //                 <div className='flex gap-[19px] items-center'>
// // //                   <span><p className='bg-[#FF0000] rounded-full text-white font-bold py-[6px] px-[14px]'>Qazr #1</p></span>
// // //                   <p className="justify-start text-red-600 text-2xl font-bold">2,500,000 so’m</p>
// // //                 </div>

// // //                 <span className='flex items-center gap-[17px] mt-[28px]'>
// // //                   <Calendar />
// // //                   <p className="justify-start text-black text-xl font-bold">19.09.2025, 19:50</p>
// // //                 </span>
// // //               </div>
// // //               <div className='w-full py-[19px] px-[20px] border-[#FF0000] bg-[#FFEFEF] border-2 rounded-[20px] text-center mb-[30px]'>

// // //                 <div className='flex gap-[19px] items-center'>
// // //                   <span><p className='bg-[#FF0000] rounded-full text-white font-bold py-[6px] px-[14px]'>Qazr #1</p></span>
// // //                   <p className="justify-start text-red-600 text-2xl font-bold">2,500,000 so’m</p>
// // //                 </div>

// // //                 <span className='flex items-center gap-[17px] mt-[28px]'>
// // //                   <Calendar />
// // //                   <p className="justify-start text-black text-xl font-bold">19.09.2025, 19:50</p>
// // //                 </span>
// // //               </div>

// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //     )
// // //   }
// // // }


















import React, { Component } from "react";
import Navbar from "../Components/Navbar";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import {
  Search,
  Download,
  Check,
  Plus,
  CircleMinus,
  Clock,
} from "lucide-react";

export default class List_Qarz extends Component {
  state = {
    showModal: false,
    minusModal: false,
    historyModal: false,
    filterModal: false,
    search: "",
    debts: [],
  };

   /* ================= EXCEL ================= */
  exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(this.state.customers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customers");
    XLSX.writeFile(wb, "Qarzdorlar_List.xlsx");
  };

  async componentDidMount() {
    const q = query(collection(db, "qarzlar"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const debts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    this.setState({ debts });
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { debts } = this.state;

    return (
      <div className="w-full">
        <Navbar />

        {/* MAIN */}
        <div className="container px-4">
          <div className="bg-white rounded-[20px] py-[17px] px-[25px] mt-[40px]">

            <h1 className="text-[22px] md:text-[25px] font-bold text-center">
              So’nggi qarzdorlar ro’yxati
            </h1>

            {/* TOP BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-8 justify-between">
              <button
              onClick={this.exportExcel}
              className="bg-gray-200 p-3 rounded-[15px] w-[160px] h-[50px]"
            >
              PDF / EXCEL
            </button>

              <button className="bg-[#00D73D] text-white px-4 py-3 rounded-[15px]">
                Ogohlantirish
              </button>

              <button className="bg-[#E1FF00] px-4 py-3 rounded-[15px]">
                Filtirlash
              </button>

              <button className="bg-[#1C9B1C] text-white font-bold px-6 py-3 rounded-[15px] w-full md:w-auto">
                + QARZ QO’SHISH
              </button>
            </div>

            {/* SEARCH */}
            <div className="mt-6 w-full">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  onChange={this.handleSearch}
                  className="w-full py-3 pl-14 pr-4 bg-[#F5F5F5] rounded-[15px] text-[18px] md:text-[22px]"
                  placeholder="Mijoz qidiruv..."
                />
              </div>
            </div>

            {/* TABLE (SCROLL ON MOBILE) */}
            <div className="mt-8 overflow-x-auto">
              <div className="min-w-[1100px]">

                {/* HEADER */}

                <div>

               
                <div className="bg-neutral-100 rounded-[10px] px-6 py-3 flex justify-between font-bold text-stone-500">
                  <div className="w-[150px]">ISM</div>
                  <div className="w-[200px]">TELEFON</div>
                  <div className="w-[200px]">MAHSULOT</div>
                  <div className="w-[160px]">QARZ</div>
                  <div className="w-[200px]">HOLATI</div>
                </div>
                
 </div>
                {/* ROWS */}
                {debts.map((d) => (
                  <div
                    key={d.id}
                    className="flex justify-between px-6 py-6 border-b"
                  >
                    <div className="w-[150px]">
                      <p className="font-bold">{d.name}</p>
                      <button className="bg-[#00D73D] text-white px-3 py-2 rounded mt-3 flex gap-2">
                        <Check /> To'landi
                      </button>
                    </div>

                    <div className="w-[200px]">
                      <p>{d.phone}</p>
                      <button className="bg-[#443EFF] text-white px-3 py-2 rounded mt-3 flex gap-2">
                        <Plus /> Qarz qo’shish
                      </button>
                    </div>

                    <div className="w-[200px]">
                      <p>{d.product}</p>
                      <button className="bg-[#FF0004] text-white px-3 py-2 rounded mt-3 flex gap-2">
                        <CircleMinus /> Qarz ayirish
                      </button>
                    </div>

                    <div className="w-[160px]">
                      <p>{d.amount?.toLocaleString()} so’m</p>
                      <button className="border px-3 py-2 rounded mt-3 flex gap-2">
                        <Clock /> Tarix
                      </button>
                    </div>

                    <div className="w-[200px]">
                      <p>{new Date(d.createdAt?.seconds * 1000).toLocaleDateString()}</p>
                      <span className="inline-block bg-[#FFCFCF] text-[#FF0000] px-4 py-2 rounded mt-3">
                        To’lanmagan
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}