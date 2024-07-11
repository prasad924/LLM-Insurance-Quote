import React from 'react'

const Help = () => {
    return (
        <>
            <div className='absolute top-5 flex gap-2 mx-5 cursor-pointer'>
                <img src="../assets/arrow.svg" alt="image" />
                <p className='' style={{ fontFamily: "Inter, sans-serif", fontSize: '21.74px' }}>Back</p>
            </div>
            <div className='select-none h-screen flex justify-center items-center'>
                <div className='flex flex-col items-center'>
                    <p className='border shadow-3xl rounded-3xl p-10 text-center' style={{ fontFamily: "Inter, sans-serif", fontSize: '59px' }}><b>We're Here to Help.</b> <br /> CONTACT US</p>
                    <pre className='mt-10' style={{ fontFamily: "Inter, sans-serif", fontWeight: 200, fontSize: '33px' }}>Phone : 9424713283    Email : inusurancehealth@gmail.com</pre>
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 200, fontSize: '33px' }}>ADDRESS : KMIT, Narayanaguda, 50093</p>
                    <p className='m-10' style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: '78px' }}>THANK YOU</p>
                </div>
            </div>
        </>
    )
}

export default Help
