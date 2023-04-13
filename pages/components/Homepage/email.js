import React from 'react'

const Email = () => {
    return (
        <>
            <div className='w-[90%] max-w-[1300px] mx-[auto] text-center py-10'>
                <h1 className='text-[#132758] max-w-[325px] mx-[auto] font-medium text-xl pb-4'>Subscribe for updates and savings recommendation</h1>
                <input className='border border-solid border-gray-400 py-[7px] mr-3 px-2' type="email" placeholder='Email' />
                <button className='bg-[#132758] text-white font-semibold py-2 px-4 text-base'>Subscribe</button>
            </div>

        </>
    )
}

export default Email