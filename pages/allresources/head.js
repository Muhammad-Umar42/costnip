import React from 'react'

const Head = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-16'>
                <div className='text-[#132758]'><h1 className='text-5xl font-bold pb-8'> Resource Library </h1>

                    <div className='flex'>
                        <h1 className='text-lg max-w-[520px] pb-8'> Costnip understands your health care experience doesn’t start and stop at a health care facility. Search for resources for health insurance, pharmacies, medical devices, and more.</h1>
                    </div>

                </div>
                <div className='text-center'>
                    <img className='w-[200px] mx-[auto]' src="resource.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default Head