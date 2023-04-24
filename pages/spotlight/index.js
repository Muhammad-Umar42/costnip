import React from 'react'
import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import { Tab } from '@headlessui/react';

const Index = () => {

    const { data: spotLightHead, isLoading, error } = useFetcher('/api/health-spootlight-header?populate=*');
    const { data: spotlightcard, isLooading, erroor } = useFetcher('/api/blogs?populate=*');
    const { data: spotlighttopic, isLoooading, errooor } = useFetcher('/api/topics?populate=*');

    if (isLoading || isLooading || isLoooading) return <DefaultLoading />;

    if (spotlightcard === undefined || spotlighttopic === undefined) return
    const allData = [...spotlightcard?.data, ...spotlighttopic?.data]


    const base = spotLightHead?.data?.attributes

    if (error || errooor || erroor) return <h1>Error</h1>;

    return (
        <>
            {/* ///////////head/////// */}
            <div className='bg-[#ebf3ff]'>
                <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-12">
                    <div>
                        <h1 className='font-semibold text-3xl clr'>{base.title}</h1>
                        <h1 className='clr md:pt-4 md:pb-4 pb-12 pt-4 '>{base.sub_title}</h1>
                    </div>
                    <div className='flex justify-evenly'>
                        <div>
                            <img className='max-w-[50px] w-full mx-[auto] ' src={useMedia(base.image1)} alt="image" />
                            <h1 className='clr'>{base.image1_legend}</h1>
                        </div>
                        <div>
                            <img className='max-w-[50px] w-full mx-[auto] ' src={useMedia(base.image2)} alt="image" />
                            <h1 className='clr'>{base.image2_legend}</h1>
                        </div>
                        <div>
                            <img className='max-w-[50px] w-full mx-[auto] ' src={useMedia(base.image3)} alt="image" />
                            <h1 className='clr'>{base.image3_legend}</h1>
                        </div>

                    </div>
                </div>
            </div>
            {/* ///////////head/////// */}
            {/* ///////////////tabs///////////// */}
            <div className='countain grid grid-cols-1 md:grid-cols-4 gap-x-8 pb-12'>

                <div className='col-span-3'>
                    <Tab.Group>
                        <div className='flex border-b pt-6 pb-3 mb-4 border-solid'>
                            <Tab.List>
                                <Tab className='pr-8 font-bold outline-0'> All </Tab>
                            </Tab.List>
                            <Tab.List>
                                <Tab className='pr-8 font-bold outline-0'> News </Tab>
                            </Tab.List>
                            <Tab.List>
                                <Tab className='pr-8 font-bold outline-0'> Disease </Tab>
                            </Tab.List>
                            <Tab.List>
                                <Tab className='pr-8 font-bold outline-0'> Topics </Tab>
                            </Tab.List>
                            <Tab.List>
                                <Tab className='pr-8 font-bold outline-0'> Forum </Tab>
                            </Tab.List>
                        </div>


                        <Tab.Panels>
                            <Tab.Panel>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                                    {
                                        allData?.map((item) => {

                                            return (
                                                <div key={item.id} className='shadow-lg p-4'>
                                                    <img
                                                        alt="Office"
                                                        src={useMedia(item?.attributes?.thumbnail ? item?.attributes?.thumbnail : item?.attributes?.image)}
                                                        className="h-56 w-full object-cover shadow-lg"
                                                    />
                                                    <h1 className='font-bold py-3'>
                                                        {item?.attributes?.title ? item?.attributes?.title : item?.attributes?.lifetime_cost}
                                                    </h1>
                                                    <h1 className=' pb-3'>Lorem ipsum dolor sit amen consectetur adipisicing elite. Impeding explicabo a nihil asperities quadrat perspiciatis nostrum venial alias repellant qui?</h1>
                                                    <button className='pb-2 bg-green-400 font-semibold rounded-md p-1.5 mb-2'>Read full article</button>
                                                    <h6>Written by Care Rosenbloom</h6>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </Tab.Panel>
                            <Tab.Panel>i am fine</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

                {/* ///////////////sidebar////////////////////// */}


                <div className='bg-gray-100 text-center mt-8 p-4'>
                    <h1 className='text-gray-500 font-bold '>Recently Published</h1>
                    <div className='bg-white p-2 mt-4 border-l-4 border-solid border-blue-300 rounded-lg'>
                        <h1 className='text-left font-semibold'>Lorem ipsum dolor sit, amet tetur adipisicing elit.</h1>
                        <div className='flex justify-between text-gray-400'>
                            <h6>John Doe</h6>
                            <div className='flex justify-between'>

                                <h6>May, 12, 2023</h6>
                                <h6> 12:44</h6>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ///////////////sidebar////////////////////// */}

            </div>
            {/* ///////////////tabs///////////// */}
        </>
    )
}

export default Index