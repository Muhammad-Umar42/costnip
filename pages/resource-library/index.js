import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import images from '@/components/images';
// import { useMedia } from '@/helpers/useMedia';

const Index = () => {



    const { data, isLoading, error } = useFetcher('/api/resource-categories');
    console.log(data);
    if (isLoading) return <DefaultLoading />;
    if (error) return <h1>Error</h1>;



    return (
        <>
            {/* library//////////////////////// */}
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-16'>
                <div className='text-[#132758]'><h1 className='text-5xl font-bold pb-8'> Resource Library </h1>

                    <div className='flex'>
                        <h1 className='text-lg max-w-[500px] pb-8'> <span className='font-semibold text-xl'>Simple</span>  resources to help you navigate the complex world of healthcare. </h1>
                    </div>

                    <h1 className='text-lg'> Let Costnip direct you to available <span className='font-semibold text-xl'>options</span> ,no matter your need. </h1>
                </div>
                <div className='text-center'>
                    <img className='w-[200px] mx-[auto]' src="resource.png" alt="image" />
                    <button className='text-2xl bg-[#f8f8f8] px-8 py-3 w-2/4 mt-8'>
                        <Link href="/resource-library/all-resources"> View All Resources </Link>
                    </button>
                </div>
            </div>
            {/* library-head//////////////////////// */}
            {/* library-tools//////////////////////// */}

            <div className='w-11/12 max-w-[1300px] mx-[auto]'>
                <h1 className='text-4xl font-bold pb-10'> Resources and Tools </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                    {
                        data.data.map((item, ind) => {
                            return (
                                <div key={item.id}>
                                    <div className='flex items-center border-solid border-[2px] border-black p-8 rounded-lg'>
                                        {/* <img className='w-[40px]' src={useMedia(item.attributes.photoUrl)} alt="" /> */}

                                        <Image width={40} height={40} src={images[ind]} alt="" />
                                        <h1 className='text-xl ml-6'> {item.attributes.name}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            {/* library-tools//////////////////////// */}
        </>
    )
}

export default Index