import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';

const SignInForm = () => {
  return (
    <>
      <img className='fixed top-0' src="/LOGO.png" alt="Image" style={{width:'215px', height:'180px'}} />
      <div className='h-screen flex justify-center items-center'>
        <div className="flex flex-col items-center border-none rounded-3xl shadow-3xl" style={{ height: '486px', width: '470px', backgroundColor: 'rgb(255, 255, 255,0.1)' }}>
          <div className='mx-auto mt-11 select-none text-xl' style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: '25.38px', }}>Login</div>
          <div className='mx-auto mt-1 select-none text-xl' style={{ fontFamily: "Inter, sans-serif", fontSize: '17.74px' }}>Enter your email and password to continue</div>
          <form className='flex flex-col' action="">
            <input className='mt-6 px-4 rounded-2xl border-2' type="text" placeholder='Email address or phone number' style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0", fontSize: '18px' }} />
            <input className='mt-6 px-4 rounded-2xl border-2' type="text" placeholder='Password' style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0", fontSize: '18px' }} />
            <p className='my-6 mx-2' style={{ fontFamily: "Inter, sans-serif", fontSize: '14.74px' }}>Forgot password? <a className='text-blue-900 underline' href='/'>Click Here</a></p>
            <button className='rounded-2xl border-2 bg-black text-white' type="submit" style={{ height: '50.41px', width: '421.5px', borderColor: "E0E0E0", fontSize: '19.74px', fontSize: '18px' }}>Login</button>
            <p className='my-2 mx-auto' style={{ fontFamily: "Inter, sans-serif", fontSize: '14.74px' }}>Create a new account <a className='text-blue-800 underline' href='/signup'>Signup</a></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
