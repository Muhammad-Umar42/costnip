import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import React from 'react'


const index = () => {

    const { data, isLoading, error } = useFetcher('/api/topics?populate=*');
    console.log(data);

    if (isLoading) return <DefaultLoading />;
    if (error) return <h1>Error</h1>;




    return (
        <>
            <div className="countain py-12">
                <h1 className='text-3xl font-bold pb-6'>Health Topics</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* ???????????--CARD////////  start*/}
                    {
                        data?.data?.map((item) => {
                            return (
                                <div key={item.id}>

                                    <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                                        <img
                                            alt="Office"
                                            src={useMedia(item.attributes.image)}
                                            className="h-56 w-full object-cover"
                                        />

                                        <div className="p-4 sm:p-6">
                                            <a href="#">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    {item.attributes.lifetime_cost}
                                                </h3>
                                            </a>

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
                            )
                        })
                    }

                    {/* ???????????--CARD////////  END */}
                </div>
            </div>
        </>
    )
}

export default index