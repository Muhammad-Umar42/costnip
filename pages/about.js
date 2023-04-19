import React from 'react'

const About = () => {
    return (
        <>
            {/* //////////////head/////////// */}
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
            {/* //////////////head/////////// */}
            {/* ////////////////////////// saving////////////////////// */}
            <div className='countain text-clr'>
                <h1 className='text-2xl text-center py-8'>Value Based Cost Savings</h1>
                <h2 className='max-w-[1105px] mx-[auto] pb-8'> Costnip was created to help take the guesswork out of healthcare spending by giving people a way to discover lower costs options for medical, dental and vision care within their area. </h2>


            </div>
            <div className='bg-gray-300 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 countain text-clr gap-8'>
                    <div className='text-center'>
                        <img className='bg-white w-full max-w-[100px] mb-4 mx-[auto] p-6 rounded-full' src="eye.png" alt="image" />
                        <h1 className='font-semibold text-xl'>Vision</h1>
                        <h5> We are 100% committed to making healthcare more accessible to all, regardless of status. </h5>
                    </div>
                    <div className='text-center'>
                        <img className='bg-white w-full max-w-[100px] mb-4 mx-[auto] p-6 rounded-full' src="eye.png" alt="image" />
                        <h1 className='font-semibold text-xl'>Vision</h1>
                        <h5> We are 100% committed to making healthcare more accessible to all, regardless of status. </h5>
                    </div>
                    <div className='text-center'>
                        <img className='bg-white w-full max-w-[100px] mb-4 mx-[auto] p-6 rounded-full' src="eye.png" alt="image" />
                        <h1 className='font-semibold text-xl'>Vision</h1>
                        <h5> We are 100% committed to making healthcare more accessible to all, regardless of status. </h5>
                    </div>
                    <div className='text-center'>
                        <img className='bg-white w-full max-w-[100px] mb-4 mx-[auto] p-6 rounded-full' src="eye.png" alt="image" />
                        <h1 className='font-semibold text-xl'>Vision</h1>
                        <h5> We are 100% committed to making healthcare more accessible to all, regardless of status. </h5>
                    </div>

                </div>
            </div>
            {/* ////////////////////////// saving////////////////////// */}

        </>
    )
}

export default About