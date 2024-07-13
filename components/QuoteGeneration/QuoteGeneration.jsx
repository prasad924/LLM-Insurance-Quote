import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './QuoteGeneration.css';

const QuoteGeneration = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const scrollToBottom = () => {
        const chatContainer = document.getElementById('chat');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    const chatBotOutput = () => {
        setTimeout(() => {
            const mess = "Hey I am your bot"
            const newMessage = {
                text: mess,
                sender: 'bot',
            }
            setMessages(messages => [...messages, newMessage]);
        }, 2000);
    }
    const handleUserClick = async () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                text: inputText,
                sender: 'user',
            };
            setMessages(messages => [...messages, newMessage]);
            setInputText('');
            await chatBotOutput();
        }
    };
    useEffect(() => {

        scrollToBottom();
    }, [messages])


    return (
        <>
            
            <div style={{
                height: 'calc(100vh - 80px)',
                backgroundImage: `url('./src/assets/ChatBot-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <p className='underline text-center select-none' style={{ fontFamily: `"Inria Serif", serif`, fontWeight: 400, fontSize: '48px' }}>Quote Generation</p>
                <div id='chat' className="chat overflow-y-scroll fixed bottom-28 w-screen flex flex-col gap-2" style={{ maxHeight: '65vh' }}>
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'myInput flex justify-end gap-2 mx-8' : 'LLMOutput flex gap-2 mx-8'}>
                            {message.sender === 'user' ? (
                                <>
                                    <div className='border border-black  rounded-3xl content-center px-5 py-2.5 whitespace-pre-wrap overflow-y-auto' style={{ backgroundColor: '#E9E9E9', maxWidth: '50vw', wordWrap: 'break-word' }}>{message.text}</div>
                                    <img src="./src/assets/Profile.png" alt="user" />
                                </>
                            ) : (
                                <>
                                    <img src="./src/assets/chatbot.png" alt="bot" />
                                    <div className='border border-black rounded-full content-center bg-white  px-5 py-2.5 whitespace-pre-wrap overflow-y-auto' style={{ maxWidth: '50vw', wordWrap: 'break-word' }}>{message.text}</div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex gap-3 fixed bottom-4 w-screen justify-between items-center px-2'>
                    <textarea
                        className='cursor-text m-0 resize-none border-0 px-0 focus:ring-0 focus-visible:ring-0'
                        style={{ width: 'inherit', borderRadius: '8px', height: '80px', padding: '20px' }}
                        type="text"
                        placeholder='Enter your text...'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button className='bg-black w-36 p-2 h-14 flex rounded-lg items-center justify-center gap-2 cursor-pointing' onClick={handleUserClick}>
                        <p className='text-white'>Send</p>
                        <img src="./src/assets/send.svg" alt="send" className='text-xs rounded-lg' />
                    </button>
                </div>
            </div>
        </>
    );
}

export default QuoteGeneration;
