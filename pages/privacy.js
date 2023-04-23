import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import React from 'react'

const privacy = () => {


    const { data, isLoading, error } = useFetcher('/api/privacy');
    // console.log(data);

    if (isLoading) return <DefaultLoading />;
    if (error) return <h1>Error</h1>;

    return (
        <>
            <div className='countain py-12' dangerouslySetInnerHTML={{ __html: data.data.attributes.body }} />
        </>
    )
}

export default privacy