import React from 'react'

const Header = () => {
    return (
        <>
            <div className='bg-[#203d86]'>
                <div className='w-[78%] mx-[auto] grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='text-white text-[41px] font-black mt-[80px] mb-[20px]'>Never Overpay For Healthcare Again</h1>
                        <h3 className='text-white text-xl pb-[100px]'>A community-driven healthcare price sharing and comparison platform. Find nearby lower cost options.</h3>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-[220px]' src="head-img.png" alt="logo" />
                    </div>
                </div>
            </div>
            <div className='w-[50%] mt-[-50px] mx-[auto] bg-white rounded-xl p-[25px] shadow-lg'>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='flex justify-center items-center border-r-2 border-solid border-gray-600'>
                        <img className='w-[25px] ' src="help.png" alt="doctor" />
                        <select className='pl-[10px] mr-[20px] w-[130px] text-gray-500 text-[18px] '>
                            <option value="Medical">Medical</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center border-r-2 border-solid border-gray-600'>
                        <img className='w-[25px]  mr-[15px]' src="search.png" alt="icon" />
                        <input className='outline-0' type="text" placeholder='Enter service' />
                    </div>
                    <div className='flex justify-center items-center border-r-2 border-solid border-gray-600'>
                        <img className='w-[25px]  mr-[15px]' src="location.png" alt="icon" />
                        <input className='outline-0' type="text" placeholder='Enter zipcode' />
                    </div>
                    <div className='flex justify-center'>
                        <button className=' bg-[#443cf4] text-white text-2xl p-[5px] max-w-[170px] rounded-[20px] leading-6'>
                            pricecare search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header