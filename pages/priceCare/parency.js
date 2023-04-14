import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Parency = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 w-[90%] max-w-[1300px] mx-[auto] py-24  '>
                <div className='m-[auto]'>
                    <h1 className='text-[#132758] font-semibold text-xl'>How can you help spread</h1>
                    <h1 className='text-[#15A6C2] font-semibold text-xl'>#Pricepparency</h1>
                    <button className='bg-[#132758] text-white py-1 px-2 rounded-full mt-6'> About our mission</button>
                </div>
                <div className='col-span-2 '>
                    <div className='flex items-center' >
                        <div className='flex items-center w-[60%]'>
                            <img className='w-[50px]' src="share.png" alt="image" />
                            <h2 className='pl-4'>Share your search results on social media</h2>
                        </div>
                        <div className='flex'>
                            <BsFacebook className='mr-1 text-xl' />
                            <BsTwitter className='mr-1 text-xl' />
                            <BsInstagram className=' text-xl' />

                        </div>
                    </div>
                    <div className='flex items-center py-12'>
                        <div className='flex items-center w-[60%]'>
                            <img className='w-[50px]' src="submit.png" alt="image" />
                            <h2 className='pl-4'>Submit your story or topic for our blog</h2>
                        </div>
                        <div>
                            <button className='bg-[#DEEAFD] text-[#132758] p-2 rounded-2xl'>Connect</button>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center w-[60%]'>
                            <img className='w-[50px]' src="report.png" alt="image" />
                            <h2 className='pl-4'>Report issues with non-transparent helthcare providers</h2>
                        </div>
                        <div className='flex'>
                            <button className='bg-[#DEEAFD] text-[#132758] p-2 rounded-2xl'>Report</button>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Parency;