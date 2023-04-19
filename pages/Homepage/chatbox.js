import React from 'react'

const Chatbox = () => {
    return (
        <>

            <div className='grid grid-cols-1 gap-y-10 md:grid-cols-3 w-[90%] max-w-[1300px] mx-[auto] py-20'>
                <div>
                    <img className='w-24 mx-[auto]' src="chat-img.png" alt="Q&A" />
                </div>
                <div>
                    <h1 className='text-2xl text-blue-800 font-bold'>Costnip Health Chatbox</h1>
                    <h1 className='text-2xl text-blue-800 font-normal max-w-[285px]'>Ask any health question, get instant answer</h1>
                </div>
                <div className='flex items-center'>
                    <input type="checkbox" id='show' />
                    <label htmlFor="show">
                        <input className='bg-blue-200 py-7 outline-0  px-3 w-[300px]' type="text" placeholder='Ask any health question here...' />
                    </label>
                </div>
            </div>
        </>
    )
}

export default Chatbox