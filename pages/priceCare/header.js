import React from 'react'

const Header = () => {
    return (
        <>
            <div className='w-[90%] max-w-[1300px] mx-[auto]'>
                <img className='w-[190px] mx-[auto]' src="priceare.png" alt="picturer" />
                <h2 className='font-semibold text-3xl pt-2 text-center text-[#132758] pb-6'>What is a pricecare search</h2>
                <h3 className='max-w-[670px] mx-[auto] text-[#132758] pb-16'>Compare and share prices facilities have charged in the past. See what others were charged and make informed decisions!</h3>

                <div className='grid grid-cols-1 md:grid-cols-3 mx-[auto] pb-16'>
                    <div className='flex justify-center'>
                        <img className='w-[70px] mr-2' src="pricedown.png" alt="" />
                        <div>
                            <h1 className='font-bold'>Find Costs</h1>
                            <h1>Know upfront or after</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-[70px] mr-2' src="bill.png" alt="" />
                        <div>
                            <h1 className='font-bold'>Share Billing info</h1>
                            <h1 className='w-[212px]'>Let others knows so they can make better choice</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-[70px] mr-2' src="hero.png" alt="" />
                        <div>
                            <h1 className='font-bold'>Be somebody's hero</h1>
                            <h1 className='w-[190px]'>Pat your self on the back. you deserve it.</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header