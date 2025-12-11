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
                </div>
            </div>
        </div>
    )
    }
}