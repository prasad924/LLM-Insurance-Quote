import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div className=''>
            <img className='fixed top-0' src="/LOGO.png" alt="Image" style={{width:'215px', height:'180px'}}/>
            <div className='h-screen flex justify-center items-center'>
                <div className="flex flex-col items-center border-none rounded-3xl shadow-3xl" style={{ height: '556px', width: '470px', backgroundColor: 'rgb(255, 255, 255,0.1)' }}>
                    <div className='mx-auto mt-10 select-none text-xl' style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: '25.38px', }}>Sign Up</div>
                    <div className='mx-auto mt-1 select-none text-xl' style={{ fontFamily: "Inter, sans-serif", fontSize: '17.74px' }}>Enter an email and password to continue</div>
                    <form className='flex flex-col' action="">
                        <input className='mt-6 px-4 rounded-2xl border-2' type="text" placeholder='Email address or phone number' style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0", fontSize: '18px' }} />
                        <input className='mt-6 px-4 rounded-2xl border-2' type="text" placeholder='Password' style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0", fontSize: '18px' }} />
                        <input className='my-6 px-4 rounded-2xl border-2' type="text" placeholder='Re-Enter Password' style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0" , fontSize: '18px'}} />
                        <button className='rounded-2xl border-2 bg-black text-white' type="submit" style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0", fontSize: '19.74px' }}>SignUp</button>
                    </form>
                    <p className='m-8 text-center' style={{ fontFamily: "Inter, sans-serif", fontSize: '14.74px' }}>By clicking continue, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
