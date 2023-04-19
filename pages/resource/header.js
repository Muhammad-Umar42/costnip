import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-16'>
                <div className='text-[#132758]'><h1 className='text-5xl font-bold pb-8'> Resource Library </h1>

                    <div className='flex'>
                        <h1 className='text-lg max-w-[500px] pb-8'> <span className='font-semibold text-xl'>Simple</span>  resources to help you navigate the complex world of healthcare. </h1>
                    </div>

                    <h1 className='text-lg'> Let Costnip direct you to available <span className='font-semibold text-xl'>options</span> ,no matter your need. </h1>
                </div>
                <div className='text-center'>
                    <img className='w-[200px] mx-[auto]' src="resource.png" alt="image" />
                    <button className='text-2xl bg-[#f8f8f8] px-8 py-3 w-2/4 mt-8'> <Link href="/allresources"> View All Resources </Link></button>
                </div>
            </div>
        </>
    )
}

export default Header