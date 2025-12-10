import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <div className='max-w-[641px] w-full h-[980px] bg-[#fff] rounded-[15px] mt-[122px]'>
                            <div className='text-center pt-[50px]'>
                                <h2 className='text-[35px] font-bold'>Qarz Daftari</h2>
                                <p className='text-[25px]'>Hisob yaratish</p>
                            </div>

                            {/* Inputs */}

                            <div className='container px-[93px] py-[50px]'>
                                <form action="#!">
                                    <label className='text-[23px]' htmlFor="name">Ism</label><br />
                                    <input className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]' type="text" name="text" id="Name_p" placeholder='Ismingizni kiriting' /><br /><br />
                                    <label className='text-[23px]' htmlFor="Market_name">Do’kon nomi</label><br />
                                    <input className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]' type="text" name="Market_n" id="Market_nn" placeholder='Mini Market' /><br /><br />
                                    <label className='text-[23px]' htmlFor="Email">Elektron pochta</label><br />
                                    <input className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]' type="email" name="email" id="el_pochta" placeholder='demo123@gmail.com' /><br /><br />
                                    <label className='text-[23px]' htmlFor="password">Parol</label><br />
                                    <input className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]' type="password" name="password" id="passwod_acc" placeholder='Parolingizni kiriting' /><br />
                                    <label className='text-[23px]' htmlFor="password">Parolni tasdiqlash</label><br />
                                    <input className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]' type="password" name="password" id="passwod_acc" placeholder='Parolingizni qayta kiriting' /><br />
                                    <div className='mt-[30px] ml-[290px] text-[#D1A84B]'>
                                        <a href="#!">Parolni unutdingizmi?</a>
                                    </div>

                                    {/* Buttons */}

                                    <div>
                                        {/* <button className='bg-[#D1A84B] max-w-[455px] w-full h-[50px] rounded-[15px] mt-[35px] text-[23px] text-center py-[5px]' type="button"><a href="#!">Kirish</a></button><br />    */}
                                        <button className=' max-w-[455px] w-full h-[50px] rounded-[15px] border-[2px] border-[#D1A84B] text-[#D1A84B] mt-[22px] text-[23px] text-center py-[5px]' type="button"><a href="#!">Ro’yxatdan o’tish</a></button>
                                    </div>
                                </form>
                                <p className='text-center mt-[40px]'>@ 2025 Qarz Daftar  Powered by:  <span className='font-bold'><a href="#!" target='_blank'>MAX - V</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
