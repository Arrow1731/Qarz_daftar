// import React, { Component } from 'react'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export default class Login extends Component {

//     state = {
//         email: "",
//         password: ""
//     }

//     handleLogin = () => {
//         signInWithEmailAndPassword(auth, this.state.email, this.state.password)
//             .then(() => {
//                 window.location.href = "/Home";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className='max-w-[641px] w-full h-[780px] bg-[#fff] rounded-[15px] mt-[122px] py-[90px] m-auto'>
//                         <div className='text-center'>
//                             <h2 className='text-[35px] font-bold'>Qarz Daftari</h2>
//                             <p className='text-[25px] mb-[64px]'>Tizimga kirish</p>
//                         </div>

//                         <div className='container px-[93px]'>

//                             <label className='text-[23px]'>Elektron pochta</label><br />
//                             <input
//                                 className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]'
//                                 type="email"
//                                 placeholder='demo123@gmail.com'
//                                 onChange={(e) => this.setState({ email: e.target.value })}
//                             /><br /><br />

//                             <label className='text-[23px]'>Parol</label><br />
//                             <input
//                                 className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]'
//                                 type="password"
//                                 placeholder='Parolingizni kiriting'
//                                 onChange={(e) => this.setState({ password: e.target.value })}
//                             /><br />

//                             <div className='mt-[30px] ml-[290px] text-[#D1A84B]'>
//                                 <a href="/Reset_pass">Parolni unutdingizmi?</a>
//                             </div>

//                             <div>
//                                 <button
//                                     onClick={this.handleLogin}
//                                     className='bg-[#D1A84B] max-w-[455px] w-full h-[50px] rounded-[15px] mt-[35px] text-[23px] text-[#fff]'
//                                     type="button"
//                                 >
//                                     Kirish
//                                 </button><br />

//                                 <button
//                                     className='max-w-[455px] w-full h-[50px] rounded-[15px] border-[2px] border-[#D1A84B] text-[#D1A84B] mt-[22px] text-[23px]'
//                                     type="button"
//                                 >
//                                     <a href="/Register">Ro’yxatdan o’tish</a>
//                                 </button>
//                             </div>

//                             <p className='text-center mt-[40px]'>
//                                 @ 2025 Qarz Daftar Powered by:
//                                 <span className='font-bold'>
//                                     <a href="https://t.me/MAX_V_Coders" target='_blank'> MAX - V</a>
//                                 </span>
//                             </p>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }















import React, { Component } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Eye, EyeOff } from "lucide-react";

export default class Login extends Component {

    state = {
        email: "",
        password: "",
        showPassword: false
    }

    handleLogin = () => {
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then(() => {
                window.location.href = "/Home";
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    togglePassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    render() {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className='max-w-[641px] w-full bg-[#fff] rounded-[15px] py-[60px] md:py-[90px] m-auto'>
                    
                    {/* HEADER */}
                    <div className='text-center'>
                        <h2 className='text-[30px] md:text-[35px] font-bold'>Qarz Daftari</h2>
                        <p className='text-[20px] md:text-[25px] mb-[40px] md:mb-[64px]'>Tizimga kirish</p>
                    </div>

                    <div className='px-4 sm:px-[50px] md:px-[93px]'>

                        {/* EMAIL */}
                        <label className='text-[18px] md:text-[23px]'>Elektron pochta</label><br />
                        <input
                            className='w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]'
                            type="email"
                            placeholder='demo123@gmail.com'
                            onChange={(e) => this.setState({ email: e.target.value })}
                        /><br /><br />

                        {/* PASSWORD */}
                        <label className='text-[18px] md:text-[23px]'>Parol</label><br />
                        <div className="relative mt-[15px]">
                            <input
                                className='w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] pr-[55px]'
                                type={this.state.showPassword ? "text" : "password"}
                                placeholder='Parolingizni kiriting'
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                            <button
                                type="button"
                                onClick={this.togglePassword}
                                className="absolute right-[18px] top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {this.state.showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>

                        {/* RESET */}
                        <div className='mt-[20px] text-right text-[#D1A84B]'>
                            <a href="/Reset_pass">Parolni unutdingizmi?</a>
                        </div>

                        {/* BUTTONS */}
                        <div>
                            <button
                                onClick={this.handleLogin}
                                className='bg-[#D1A84B] w-full h-[50px] rounded-[15px] mt-[35px] text-[20px] md:text-[23px] text-[#fff]'
                                type="button"
                            >
                                Kirish
                            </button><br />

                            <button
                                className='w-full h-[50px] rounded-[15px] border-[2px] border-[#D1A84B] text-[#D1A84B] mt-[22px] text-[20px] md:text-[23px]'
                                type="button"
                            >
                                <a href="/Register">Ro’yxatdan o’tish</a>
                            </button>
                        </div>

                        {/* FOOTER */}
                        <p className='text-center mt-[40px] text-[14px] md:text-[16px]'>
                            @ 2025 Qarz Daftar Powered by:
                            <span className='font-bold'>
                                <a href="https://t.me/MAX_V_Coders" target='_blank' rel="noreferrer"> MAX - V</a>
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}