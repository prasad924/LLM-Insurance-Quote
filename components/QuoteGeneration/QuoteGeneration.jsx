import React from 'react';
import NavBar from '../NavBar/NavBar';

const QuoteGeneration = () => {
    return (
        <>
            <NavBar items={[
                { title: "Help", path: "../assets/Help.svg" }
            ]} />
            <div style={{
                height: 'calc(100vh - 80px)',
                backgroundImage: `url('../assets/ChatBot-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <p className='underline text-center' style={{ fontFamily: ` "Inria Serif", serif`, fontWeight: 400, fontSize: '48px' }}>Quote Generation</p>
                <div className='flex gap-3 fixed bottom-4 w-screen justify-between items-center px-2'>
                    <input style={{width:'inherit', borderRadius:'8px', height:'80px', padding:'20px'}} type="text" placeholder='Enter your text...' />
                    <button className='bg-black w-36 p-2 h-14 flex rounded-lg items-center justify-center gap-2'>
                        <p className='text-white '>Send</p>
                        <img src="../assets/send.svg" alt="send" className='text-xs rounded-lg' />
                    </button>
                </div>
            </div>
        </>
    );
}

export default QuoteGeneration;
