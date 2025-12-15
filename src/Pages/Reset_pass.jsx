// import React, { Component } from 'react'

// export default class Reset extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className='max-w-[641px] w-full h-[676px] bg-[#fff] mt-[90px] rounded-[15px]'>
//                         <div className='container px-[93px]'>
//                             <div className='text-center pt-[90px]'>
//                                 <h2 className='text-[35px] font-bold'>Paro'lni tiklash</h2>
//                                 <p className='text-[20px] pt-[15px] text-[#7D7D7D]'>Bu yerga hisobingizga biriktirilgan elektron pochta manzilini kiriting</p>
//                             </div>

//                             {/* INPUT RESET */}

//                             <form className='mt-[40px]' action="#!">
//                                 <label className='text-[20px]' htmlFor="Email">Elektron pochtangizni kiritng</label><br />
//                                 <input className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]' type="email" name="email" id="el_pochta" placeholder='demo123@gmail.com' /><br /><br />
//                             </form>

//                             {/* Buttons */}

//                             <div>
//                                 <button className='bg-[#D1A84B] max-w-[455px] w-full h-[50px] rounded-[15px] mt-[21px] text-[23px] text-center py-[5px] text-[#fff]' type="button"><a href="#!">Parolni tiklash</a></button><br />
//                                 {/* <button className=' max-w-[455px] w-full h-[50px] rounded-[15px] border-[2px] border-[#D1A84B] text-[#D1A84B] mt-[22px] text-[23px] text-center py-[5px]' type="button"><a href="/Register">Ro’yxatdan o’tish</a></button> */}
//                             </div>
//                             <p className='text-center mt-[150px]'>@ 2025 Qarz Daftar  Powered by:  <span className='font-bold'><a href="https://t.me/MAX_V_Coders" target='_blank'>MAX - V</a></span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }





















import React, { Component } from 'react'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

export default class Reset extends Component {

    state = {
        email: ""
    }

    handleReset = () => {
        sendPasswordResetEmail(auth, this.state.email)
            .then(() => {
                alert("Reset email yuborildi!");
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className='max-w-[641px] w-full h-[676px] bg-[#fff] mt-[90px] rounded-[15px] m-auto'>

                        <div className='container px-[93px]'>
                            <div className='text-center pt-[90px]'>
                                <h2 className='text-[35px] font-bold'>Parolni tiklash</h2>
                                <p className='text-[20px] pt-[15px] text-[#7D7D7D]'>
                                    Elektron pochtangizni kiriting
                                </p>
                            </div>

                            <label className='text-[20px]'>Elektron pochta</label><br />
                            <input
                                className='max-w-[486px] w-full h-[50px] py-[10px] px-[24px] border-[2px] rounded-[15px] mt-[15px]'
                                type="email"
                                placeholder='demo123@gmail.com'
                                onChange={(e) => this.setState({ email: e.target.value })}
                            /><br /><br />

                            <button
                                onClick={this.handleReset}
                                className='bg-[#D1A84B] max-w-[455px] w-full h-[50px] rounded-[15px] text-[23px] text-[#fff]'
                                type="button"
                            >
                                Parolni tiklash
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}