import React from 'react'
import Link from 'next/link'
import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import { useAmp } from 'next/amp';

const Index = () => {

    const { data: spotLightHead, isLoading, error } = useFetcher('/api/health-spootlight-header?populate=*');
    // console.log(spotLightHead);

    const base = spotLightHead?.data?.attributes
    if (isLoading) return <DefaultLoading />;
    if (error) return <h1>Error</h1>;


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
            {/* ///////////insight/////// */}
            <div className='countain'>
                <div className='clr flex items-baseline py-8'>
                    <h1 className='text-2xl font-semibold'>Costnip Insight</h1>
                    <h1 className='text-sm ml-4'> <Link href="/spotlight/all-sportlight"> View All </Link></h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* ???????????First--CARD//////// START*/}
                    <div>
                        {/* <!--
  Heads up! 👋

  This component comes with some `rtl` classNamees. Please remove them they are not needed in your project.
--> */}

                        <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                            <img
                                alt="Office"
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>

                                <a
                                    href="#"
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                                >
                                    Find out more

                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                                        &rarr;
                                    </span>
                                </a>
                            </div>
                        </article>

                    </div>
                    {/* ???????????First--CARD////////  END */}

                </div>
                <div className='clr flex items-baseline py-12'>
                    <h1 className='text-2xl font-semibold'>Health Topics</h1>
                    <h1 className='text-sm ml-4'>
                        <Link href='/spotlight/health-topic'> View All </Link>
                    </h1>
                </div>
            </div>
            {/* ///////////insight/////// */}
        </>
    )
}

export default Index