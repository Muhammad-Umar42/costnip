import React from 'react'

const Contact = () => {
    return (
        <>
            {/* ////////////head////////////// */}
            <div className="grid grid-cols-1 md:grid-cols-2 countain py-12">
                <div className='text-clr m-[auto]'>
                    <h1 className='font-bold text-2xl w-full max-w-[200px] pb-4'>Drop Us A Line We Love Helping</h1>
                    <h3 className='w-full max-w-[500px]'> If you have a question about Costnip, chances are you can find the answer in our <span className='text-blue-500 underline'>FAQs</span> section</h3>
                </div>
                <div>
                    <img className='w-[350px]' src="contact.png" alt="image" />
                </div>
            </div>
            {/* ////////////head////////////// */}
            {/* ////////////form////////////// */}
            <div className='bg-gray-300 py-14'>
                <div className='w-11/12 max-w-[1300px] mx-[auto]'>
                    <div className='w-8/12 mx-[auto] bg-white p-6 rounded-xl'>
                        <h1 className='font-semibold text-4xl'>Get in Touch</h1>
                        <div className="divider"></div>
                        <h1>m.umar.programer@gmail.com <span className='text-blue-400'>switch account</span></h1>
                        <div className="divider"></div>
                        <h1 className='text-red-400'>* Indicates required question</h1>
                    </div>
                    <form>

                        <div className='w-8/12 mx-[auto] bg-white p-6 rounded-xl my-8'>
                            <label className='block pb-12'>Email <span className='text-red-400'>*</span></label>
                            <input className='outline-0 border-b border-solid w-2/5 mb-6' type="email" placeholder='your email address' />
                        </div>


                        <div className='w-8/12 mx-[auto] bg-white p-6 rounded-xl my-8'>
                            <label className='block pb-12'>Your name <span className='text-red-400'>*</span></label>
                            <input className='outline-0 border-b border-solid w-2/5 mb-6' type="email" placeholder='your name' />
                        </div>


                        <div className='w-8/12 mx-[auto] bg-white p-6 rounded-xl my-8'>
                            <label className='block pb-12'>Direct to<span className='text-red-400'>*</span></label>
                            <input className='outline-0 border-b border-solid w-2/5 mb-6' type="email" placeholder='your name' />
                        </div>


                        <div className='w-8/12 mx-[auto] bg-white p-6 rounded-xl'>
                            <label className='block pb-12'>Your message <span className='text-red-400'>*</span></label>
                            <input className='outline-0 border-b border-solid w-full mb-6' type="email" placeholder='your  ansmer' />
                        </div>


                        <div className='w-8/12 mx-[auto] flex justify-between mt-6'>
                            <button className='bg-gray-500 text-white px-4 py-2 rounded-lg'>Submit</button>
                            <button className='text-gray-500 text-lg'>clear form</button>
                        </div>
                        <div className='w-8/12 mx-[auto] mt-4 text-sm'>
                            <h6 className='text-gray-500'>Never submit passwords through Google Forms.</h6>

                        </div>
                        <div className='w-8/12 mx-[auto] mt-4 flex pb-24 '>
                            <div className=' text-sm flex w-3/4 justify-evenly'>
                                <h6 className='text-gray-700 font-semibold'>Google <span className='text-gray-500'>forms</span></h6>
                                <h1 className='text-gray-500'>This form was created inside Costnip.</h1>
                            </div>
                            <div className='w-1/4 text-right'>
                                <button>more</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
            {/* ////////////form////////////// */}
        </>
    )
}

export default Contact