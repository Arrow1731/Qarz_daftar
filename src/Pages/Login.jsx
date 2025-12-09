import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className='max-w-[641px] w-full h-[780px] bg-[#fff] rounded-[15px] mt-[122px]'>
                        <div className='text-center pt-[90px]'>
                            <h2 className='text-[35px] font-bold'>Qarz Daftari</h2>
                            <p className='text-[25px]'>Tizimga kirish</p>
                        </div>

                        {/* Inputs */}

                        <div>
                            <form action="#!">
                                <label htmlFor="Email">Elektron pochta</label><br />
                                <input type="email" name="email" id="el_pochta" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}