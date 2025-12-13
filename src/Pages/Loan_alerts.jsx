// import React, { Component } from 'react'
// import { Bell } from "lucide-react";

// export default class Loan_alers extends Component {
//     render() {
//         return (
//             <div className='mt-[90px]'>
//                 <div className="container">
//                     <div className='max-w-[898px] w-full h-[890px] bg-[#fff] rounded-[40px] py-[20px] px-[50px]'>
//                         <div className='flex gap-[30px] items-center font-bold text-[30px]'>
//                             <Bell className="w-6 h-6 text-[#34C759]" />
//                             <h3>To'lov Ogohlantirish</h3>
//                         </div> <hr className='mt-[27px]' />

//                         {/* SWITCH BUTTONS */}

//                         <center>
//                             <div className='max-w-[700px] w-full h-[90px] bg-[#CDCDCD] rounded-[50px] flex gap-[40px] items-center justify-center mt-[15px]'>
//                                 <div>
//                                     <button className='bg-[#0ECF00] rounded-[40px] max-w-[360px] w-full h-[80px] py-[6px] px-[67px]'>
//                                         <a href="#!" className='text-[21px] text-[#fff] font-bold'>Muddati o’tgan <br /> qarzdorlar</a>
//                                     </button>
//                                 </div>
//                                 <div>
//                                     <button>
//                                         <a href="#!" className='text-[21px] font-bold'>Muddati yaqinlashgan <br /> qarzdorlar</a>
//                                     </button>
//                                 </div>
//                             </div>
//                         </center>

//                         {/* CARD LINES */}

//                         <div className='mt-[40px]'>
//                             <div className='flex items-center justify-between bg-[#FFEFEF] border-[2px] border-[#FF0000] py-[18px] px-[20px] rounded-[50px]'>
//                                 <div className='flex items-center gap-[20px]'>
//                                     <Bell className="w-[60px] h-[60px] text-[red] bg-[#FFD9D9] rounded-[15px] p-[5px]" />

//                                     <div>
//                                         <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
//                                         <p className='text-[20px]'>To’lov sanasi: <span className='text-[#FF0000]'>25. 07. 2024</span></p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className='text-[25px] font-bold'>250.000 so’m</p>
//                                     <p className='text-[#FF0000] font-bold text-[18px]'>MUDDATI O’TGAN</p>
//                                 </div>
//                             </div> <br />

//                             <div className='flex items-center justify-between bg-[#FFEFEF] border-[2px] border-[#FF0000] py-[18px] px-[20px] rounded-[50px]'>
//                                 <div className='flex items-center gap-[20px]'>
//                                     <Bell className="w-[60px] h-[60px] text-[red] bg-[#FFD9D9] rounded-[15px] p-[5px]" />

//                                     <div>
//                                         <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
//                                         <p className='text-[20px]'>To’lov sanasi: <span className='text-[#FF0000]'>25. 07. 2024</span></p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className='text-[25px] font-bold'>250.000 so’m</p>
//                                     <p className='text-[#FF0000] font-bold text-[18px]'>MUDDATI O’TGAN</p>
//                                 </div>
//                             </div> <br />

//                             <div className='flex items-center justify-between bg-[#FFEFEF] border-[2px] border-[#FF0000] py-[18px] px-[20px] rounded-[50px]'>
//                                 <div className='flex items-center gap-[20px]'>
//                                     <Bell className="w-[60px] h-[60px] text-[red] bg-[#FFD9D9] rounded-[15px] p-[5px]" />

//                                     <div>
//                                         <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
//                                         <p className='text-[20px]'>To’lov sanasi: <span className='text-[#FF0000]'>25. 07. 2024</span></p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className='text-[25px] font-bold'>250.000 so’m</p>
//                                     <p className='text-[#FF0000] font-bold text-[18px]'>MUDDATI O’TGAN</p>
//                                 </div>
//                             </div> <br />

//                             <div className='flex items-center justify-between bg-[#FFEFEF] border-[2px] border-[#FF0000] py-[18px] px-[20px] rounded-[50px]'>
//                                 <div className='flex items-center gap-[20px]'>
//                                     <Bell className="w-[60px] h-[60px] text-[red] bg-[#FFD9D9] rounded-[15px] p-[5px]" />

//                                     <div>
//                                         <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
//                                         <p className='text-[20px]'>To’lov sanasi: <span className='text-[#FF0000]'>25. 07. 2024</span></p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className='text-[25px] font-bold'>250.000 so’m</p>
//                                     <p className='text-[#FF0000] font-bold text-[18px]'>MUDDATI O’TGAN</p>
//                                 </div>
//                             </div> <br />

//                             <div className='flex items-center justify-between bg-[#FFEFEF] border-[2px] border-[#FF0000] py-[18px] px-[20px] rounded-[50px]'>
//                                 <div className='flex items-center gap-[20px]'>
//                                     <Bell className="w-[60px] h-[60px] text-[red] bg-[#FFD9D9] rounded-[15px] p-[5px]" />

//                                     <div>
//                                         <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
//                                         <p className='text-[20px]'>To’lov sanasi: <span className='text-[#FF0000]'>25. 07. 2024</span></p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className='text-[25px] font-bold'>250.000 so’m</p>
//                                     <p className='text-[#FF0000] font-bold text-[18px]'>MUDDATI O’TGAN</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
















import React, { Component } from 'react'
import { Bell } from "lucide-react";

export default class Loan_alers extends Component {

    state = {
        activeTab: "expired" // expired | upcoming
    }

    render() {
        const { activeTab } = this.state;

        return (
            <div className='mt-[90px]'>
                <div className="container">
                    <div className='max-w-[898px] w-full h-[890px] bg-[#fff] rounded-[40px] py-[20px] px-[50px]'>

                        <div className='flex items-center justify-between'>
                            {/* HEADER */}
                            <div className='flex gap-[30px] items-center font-bold text-[30px]'>
                                <Bell className="w-6 h-6 text-[#34C759]" />
                                <h3>To'lov Ogohlantirish</h3>
                            </div>
                            <div>
                                <button className='bg-[#000] rounded-[25px] p-[10px]'><a href="/home" className='text-[30px] font-bold text-[#fff]'>Ortga Qaytish</a></button>
                            </div>
                        </div>
                        <hr className='mt-[27px]' />

                        {/* SWITCH BUTTONS */}
                        <center>
                            <div className='max-w-[700px] w-full h-[90px] bg-[#CDCDCD] rounded-[50px] flex gap-[40px] items-center justify-center mt-[15px]'>

                                <div>
                                    <button
                                        onClick={() => this.setState({ activeTab: "expired" })}
                                        className={`rounded-[40px] max-w-[360px] w-full h-[80px] py-[6px] px-[67px]
                                        ${activeTab === "expired" ? "bg-[#0ECF00]" : ""}`}
                                    >
                                        <span className={`text-[21px] font-bold ${activeTab === "expired" ? "text-white" : ""}`}>
                                            Muddati o’tgan <br /> qarzdorlar
                                        </span>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        onClick={() => this.setState({ activeTab: "upcoming" })}
                                        className={`rounded-[40px] max-w-[360px] w-full h-[80px] py-[6px] px-[67px]
                                        ${activeTab === "upcoming" ? "bg-[#0ECF00]" : ""}`}
                                    >
                                        <span className={`text-[21px] font-bold ${activeTab === "upcoming" ? "text-white" : ""}`}>
                                            Muddati yaqinlashgan <br /> qarzdorlar
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </center>

                        {/* CARD LINES */}
                        <div className='mt-[40px]'>

                            {/* ===== MUDDATI O‘TGAN ===== */}
                            {activeTab === "expired" && (
                                <>
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <div key={i} className='flex items-center justify-between bg-[#FFEFEF] border-[2px] border-[#FF0000] py-[18px] px-[20px] rounded-[50px] mb-[20px]'>
                                            <div className='flex items-center gap-[20px]'>
                                                <Bell className="w-[60px] h-[60px] text-[red] bg-[#FFD9D9] rounded-[15px] p-[5px]" />
                                                <div>
                                                    <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
                                                    <p className='text-[20px]'>
                                                        To’lov sanasi: <span className='text-[#FF0000]'>25.07.2024</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[25px] font-bold'>250.000 so’m</p>
                                                <p className='text-[#FF0000] font-bold text-[18px]'>MUDDATI O’TGAN</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            {/* ===== MUDDATI YAQIN ===== */}
                            {activeTab === "upcoming" && (
                                <>
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <div key={i} className='flex items-center justify-between bg-[#FEFFEF] border-[2px] border-[#FFF600] py-[18px] px-[20px] rounded-[50px] mb-[20px]'>
                                            <div className='flex items-center gap-[20px]'>
                                                <Bell className="w-[60px] h-[60px] text-[#FFF600] bg-[#FEFFEF] rounded-[15px] p-[5px]" />
                                                <div>
                                                    <h2 className='text-[25px] font-bold'>Alisher Valiyev</h2>
                                                    <p className='text-[20px]'>
                                                        To’lov sanasi: <span className='text-[#DBE700]'>30.07.2024</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[25px] font-bold'>250.000 so’m</p>
                                                <p className='text-[#DBE700] font-bold text-[18px]'>YAQIN MUDDAT</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}