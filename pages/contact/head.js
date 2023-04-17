import React from 'react'

const Head = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 countain py-12">
                <div className='text-clr m-[auto]'>
                    <h1 className='font-bold text-2xl w-full max-w-[200px] pb-4'>Drop Us A Line We Love Helping</h1>
                    <h3 className='w-full max-w-[500px]'> If you have a question about Costnip, chances are you can find the answer in our <span className='text-blue-500 underline'>FAQs</span> section</h3>
                </div>
                <div>
                    <img className='w-[350px]' src="contact.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default Head