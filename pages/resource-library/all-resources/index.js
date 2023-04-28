import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/resources?populate=*');
  const [resources, setResources] = useState(data?.data);

  useEffect(() => {
    setResources(data?.data);
  }, [data]);

  if (isLoading) return <DefaultLoading />;
  if (error) return <h1>Error</h1>;

  const getUniqueNames = [
    ...new Set(
      data.data.map(
        (item) => item.attributes.resource_category.data.attributes.name
      )
    ),
  ];

  const handleFilter = (name) => {
    if (name === 'all') {
      setResources(data.data);
    } else {
      const filteredResource = data.data.filter(
        (item) =>
          item.attributes.resource_category.data.attributes.name === name
      );
      setResources(filteredResource);
    }
  };

  return (
    <>
      {/* Hero */}
      <div className='relative overflow-hidden'>
        <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-800 sm:text-6xl dark:text-gray-200'>
              Resource Library
            </h1>
            <p className='mt-3 max-w-[700px] mx-auto text-lg  text-gray-600 dark:text-gray-400'>
              Costnip understands your health care experience doesn’t start and
              stop at a health care facility. Search for resources for health
              insurance, pharmacies, medical devices, and more.
            </p>

            <div className='mt-10 sm:mt-20'>
              <button
                className='inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                onClick={() => handleFilter('all')}
              >
                All
              </button>
              {getUniqueNames.map((item) => (
                <button
                  className='inline-flex items-center justify-center gap-2 px-4 py-3 m-1 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                  onClick={() => handleFilter(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Icon Blocks */}
      <div className='max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto'>
        <div className='grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:gap-6'>
          {resources?.map((item) => (
            <div
              className='group shadow-md flex-wrap md:flex-nowrap flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]'
              key={item.id}
            >
              <div className='mr-4'>
                <img
                  src={useMedia(item.attributes.photoUrl)}
                  alt=''
                  className='max-w-[90px] border rounded-full h-[90px] object-cover object-center'
                />
              </div>
              <div>
                <div>
                  <h3 className='block font-bold text-gray-800 dark:text-white'>
                    {item.attributes.name}
                  </h3>
                  <p
                    className='text-gray-600 dark:text-gray-400'
                    dangerouslySetInnerHTML={{
                      __html: item.attributes.description,
                    }}
                  ></p>
                </div>
                <p className='inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-2 dark:text-gray-200'>
                  Learn more
                  <svg
                    className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1'
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z'
                      fill='currentColor'
                    />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default Index;
