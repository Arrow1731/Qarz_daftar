import React, { Component } from 'react'
import { Bell } from "lucide-react";

export default class Loan_alers extends Component {
    render() {
        return (
            <div className='mt-[90px]'>
                <div className="container">
                    <div className='max-w-[898px] w-full h-[879px] bg-[#fff] rounded-[40px] py-[20px] px-[50px]'>
                        <div className='flex gap-[30px] items-center font-bold text-[30px]'>
                            <Bell className="w-6 h-6 text-[#34C759]" />
                            <h3>To'lov Ogohlantirish</h3>
                        </div> <hr className='mt-[27px]' />

                        {/* SWITCH BUTTONS */}

                        <center>
                            <div className='max-w-[700px] w-full h-[90px] bg-[#CDCDCD] rounded-[50px] flex gap-[40px] items-center justify-center mt-[15px]'>
                                <div>
                                    <button className='bg-[#0ECF00] rounded-[40px] max-w-[360px] w-full h-[80px] py-[6px] px-[67px]'>
                                        <a href="#!" className='text-[21px] text-[#fff] font-bold'>Muddati o’tgan <br /> qarzdorlar</a>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <a href="#!" className='text-[21px] font-bold'>Muddati yaqinlashgan <br /> qarzdorlar</a>
                                    </button>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}