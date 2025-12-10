import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className='max-w-[641px] w-full bg-[#fff] rounded-[15px] mt-[122px] p-[90px]'>
                        <div className='text-center pt-[90px]'>
                            <h2 className='text-[35px] font-bold'>Qarz Daftari</h2>
                            <p className='text-[25px] mb-[64px]'>Tizimga kirish</p>
                        </div>

                        {/* Inputs */}

                        <div>
                            <form action="#!">
                                <div>
                                <label className='text-[20px]' htmlFor="Email">Elektron pochta</label><br />
                                <input className='py-[19px] mt-[13px] px-[24px] w-full rounded-[15px] text-[20px] border-2 border-[#BBBBBB]' placeholder='demo123@gmail.com' type="email" name="email" id="el_pochta" />
                                </div>

                                <div>
                                <label className='text-[20px]' htmlFor="Email">Elektron pochta</label><br />
                                <input className='py-[19px] mt-[13px] px-[24px] w-full rounded-[15px] text-[20px] border-2 border-[#BBBBBB]' placeholder='demo123@gmail.com' type="email" name="email" id="el_pochta" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}