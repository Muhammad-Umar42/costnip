import React from 'react'
import { Tab } from '@headlessui/react'


const Tabs = () => {

    return (
        <>
            <div className='bg-gray-200 py-12'>
                <div className="countain">
                    <h1 className='font-bold text-2xl pb-4'>All Resources and Tools</h1>
                    <Tab.Group>
                        <div className="grid grid-cols-3 ">
                            <Tab.List>
                                <Tab className='block outline-0 mb-2'>Tab 1</Tab>
                                <Tab className='block outline-0 mb-2'>Tab 2</Tab>
                                <Tab className='block outline-0 mb-2'>Tab 3</Tab>
                            </Tab.List>
                            <Tab.Panels className='col-span-2'>
                                <Tab.Panel className=''>
                                    <h1 className='font-bold text-xl'>Tab1</h1>
                                    <div className="divider"></div>
                                    <div className='bg-white rounded-lg p-4 md:flex block mb-3'>
                                        <div className='m-[auto]' >
                                            <img className='m-[auto] md:pb-0 pb-3' src="tab.png" alt="" />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='font-bold'>Help Paying for insulin</h1>
                                            <div className="divider"></div>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum voluptatibus sapiente sit perspiciatis ratione? Doloremque rerum rem dolore voluptatem minus delectus cum tempora? Harum unde quia architecto distinctio ipsa?</h1>
                                            <h6 className='font-bold text-blue-600'>Learn more</h6>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <h1 className='font-bold text-xl'>Tab2</h1>
                                    <div className="divider"></div>
                                    <div className=' bg-white rounded-lg p-4 flex mb-3'>
                                        <div className='m-[auto]'>
                                            <img src="tab2.png" alt="" />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='font-bold'>Help Paying for insulin</h1>
                                            <div className="divider"></div>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum voluptatibus sapiente sit perspiciatis ratione? Doloremque rerum rem dolore voluptatem minus delectus cum tempora? Harum unde quia architecto distinctio ipsa?</h1>
                                            <h6 className='font-bold text-blue-600'>Learn more</h6>
                                        </div>
                                    </div>
                                    <div className='bg-white rounded-lg p-4 flex mb-3 '>
                                        <div className='m-[auto]'>
                                            <img src="tab2.png" alt="" />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='font-bold'>Help Paying for insulin</h1>
                                            <div className="divider"></div>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum voluptatibus sapiente sit perspiciatis ratione? Doloremque rerum rem dolore voluptatem minus delectus cum tempora? Harum unde quia architecto distinctio ipsa?</h1>
                                            <h6 className='font-bold text-blue-600'>Learn more</h6>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <h1 className='font-bold text-xl'>Tab3</h1>
                                    <div className="divider"></div>
                                    <div className='bg-white rounded-lg p-4 flex mb-3'>
                                        <div className='m-[auto]'>
                                            <img src="tab3.jpg" alt="" />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='font-bold'>Help Paying for insulin</h1>
                                            <div className="divider"></div>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum voluptatibus sapiente sit perspiciatis ratione? Doloremque rerum rem dolore voluptatem minus delectus cum tempora? Harum unde quia architecto distinctio ipsa?</h1>
                                            <h6 className='font-bold text-blue-600'>Learn more</h6>
                                        </div>
                                    </div>
                                    <div className='bg-white rounded-lg p-4 flex mb-3'>
                                        <div className='m-[auto]'>
                                            <img src="tab3.jpg" alt="" />
                                        </div>
                                        <div className='px-4'>
                                            <h1 className='font-bold'>Help Paying for insulin</h1>
                                            <div className="divider"></div>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum voluptatibus sapiente sit perspiciatis ratione? Doloremque rerum rem dolore voluptatem minus delectus cum tempora? Harum unde quia architecto distinctio ipsa?</h1>
                                            <h6 className='font-bold text-blue-600'>Learn more</h6>
                                        </div>
                                    </div>
                                    <div className='bg-white rounded-lg p-4 flex mb-3'>
                                        <div className='m-[auto]'>
                                            <img src="tab3.jpg" alt="" />
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
        </>
    )
}

export default Tabs