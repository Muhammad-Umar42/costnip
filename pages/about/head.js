import React from 'react'

const Head = () => {
    return (
        <>
            <div className='bg-[#132758]'>
                <div className="countain">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div>
                            <img className='w-full max-w-[400px] mx-[auto]' src="about.gif" alt="" />
                        </div>
                        <div>
                            <h1 className='text-white text-5xl font-semibold'>Empowering Informed Decisions</h1>
                            <h1 className='text-gray-200 text-xl font-semibold text-right py-4'>Join the #priceparency movement</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head