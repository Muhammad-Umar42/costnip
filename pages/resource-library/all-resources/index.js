import React from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'


const Index = () => {
    return (
        <>
            {/* ////////////////head/////////// */}
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-16'>
                <div className='text-[#132758]'><h1 className='text-5xl font-bold pb-8'> Resource Library </h1>

                    <div className='flex'>
                        <h1 className='text-lg max-w-[520px] pb-8'> Costnip understands your health care experience doesn’t start and stop at a health care facility. Search for resources for health insurance, pharmacies, medical devices, and more.</h1>
                    </div>

                </div>
                <div className='text-center'>
                    <Image className='mx-[auto]'
                        src='/resource.png'
                        width={200}
                        height={300}
                    />
                </div>
            </div>
            {/* ////////////////head/////////// */}
            {/* ////////////////tabs/////////// */}
            <div className='bg-gray-200 py-12'>
                <div className="countain">
                    <h1 className='font-bold text-2xl pb-4'>All Resources and Tools</h1>
                    <Tab.Group>
                        <div className="grid grid-cols-3 ">
                            <Tab.List>
                                <Tab className='block outline-0 mb-2'>Tab 1</Tab>

                            </Tab.List>
                            <Tab.Panels className='col-span-2'>
                                <Tab.Panel className=''>
                                    <h1 className='font-bold text-xl'>Tab1</h1>
                                    <div className="divider"></div>
                                    <div className='bg-white rounded-lg p-4 md:flex block mb-3'>
                                        <div className='m-[auto]' >
                                            <Image
                                                src="/tab.png"
                                                alt="Picture of the author"
                                                width={150}
                                                height={150}
                                            />

                                        </div>
                                        <div className='px-4'>
                                            <h1 className='font-bold'>Help Paying for insulin</h1>
                                            <div className="divider"></div>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum voluptatibus sapiente sit perspiciatis ratione? Doloremque rerum rem dolore voluptatem minus delectus cum tempora? Harum unde quia architecto distinctio ipsa?</h1>
                                            <h6 className='font-bold text-blue-600'>Learn more</h6>
                                        </div>
                                    </div>
                                </Tab.Panel>

                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </div>
            </div>
            {/* ////////////////tabs/////////// */}
            {/* ////////////////tabs/////////// */}
        </>
    )
}

export default Index