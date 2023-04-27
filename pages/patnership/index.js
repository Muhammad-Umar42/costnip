import Link from 'next/link'
import React from 'react'

const Index = () => {

    const data = [
        {
            title: 'Providers',
            desc: "Let patients know you are committed to price transparency by becoming a Transparent Provider"
        },
        {
            title: 'Providers',
            desc: "Let patients know you are committed to price transparency by becoming a Transparent Provider"
        },
        {
            title: 'Providers',
            desc: "Let patients know you are committed to price transparency by becoming a Transparent Provider"
        },
        {
            title: 'Providers',
            desc: "Let patients know you are committed to price transparency by becoming a Transparent Provider"
        },
        {
            title: 'Providers',
            desc: "Let patients know you are committed to price transparency by becoming a Transparent Provider"
        }
    ]

    return (
        <>
            {/* <Patner /> */}
            <div className='countain text-clr'>
                <div className='text-center py-12'>
                    <h1 className='font-bold text-4xl'>Partners In Value Based Care</h1>
                    <h4 className='text-lg'> Collaborating to provide better outcomes for patients while reducing costs for all. </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pb-12">
                    <div>
                        {
                            data.map((elem, ind) => {
                                return (
                                    <div key={ind} className='pb-6'>
                                        <h1 className='font-bold text-2xl'> {elem.title} </h1>
                                        <h4 className='text-lg'> {elem.desc} </h4>
                                    </div>
                                )

                            })
                        }
                        <h1 className='font-semibold text-xl'> Join Costnip in the movement to democratize healthcare </h1>
                    </div>
                    <div className='text-center'>
                        <img className='w-full' src="patner.jpg" alt="image" />
                        <button className='bg-clr text-white rounded-lg text-xl px-12 py-3 mt-8'>
                            <Link href="/contact"> Contact us </Link></button>
                    </div>
                </div>
            </div>
            {/* <Patner /> */}
        </>
    )
}

export default Index