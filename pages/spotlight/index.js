import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/blogs?populate=*');
  const {
    data: spotLightHead,
    isLoading: sloading,
    error: serror,
  } = useFetcher('/api/health-spootlight-header?populate=*');
  const [resources, setResources] = useState(data?.data);

  useEffect(() => {
    setResources(data?.data);
  }, [data]);

  if (isLoading || sloading) return <DefaultLoading />;
  if (error || serror) return <h1>Error</h1>;

  const base = spotLightHead?.data?.attributes;

  const getUniqueNames = [
    ...new Set(
      data.data.map(
        (item) => item.attributes.blog_section.data.attributes.title
      )
    ),
  ];

  const handleFilter = (name) => {
    if (name === 'all') {
      setResources(data.data);
    } else {
      const filteredResource = data.data.filter(
        (item) => item.attributes.blog_section.data.attributes.title === name
      );
      setResources(filteredResource);
    }
  };

  return (
    <>
      <div className='bg-[#ebf3ff]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-12'>
          <div>
            <h1 className='text-3xl font-semibold clr'>{base.title}</h1>
            <h1 className='pt-4 pb-12 clr md:pt-4 md:pb-4 '>
              {base.sub_title}
            </h1>
          </div>
          <div className='flex justify-evenly'>
            <div>
              <img
                className='max-w-[50px] w-full mx-[auto] '
                src={useMedia(base.image1)}
                alt='image'
              />
              <h1 className='clr'>{base.image1_legend}</h1>
            </div>
            <div>
              <img
                className='max-w-[50px] w-full mx-[auto] '
                src={useMedia(base.image2)}
                alt='image'
              />
              <h1 className='clr'>{base.image2_legend}</h1>
            </div>
            <div>
              <img
                className='max-w-[50px] w-full mx-[auto] '
                src={useMedia(base.image3)}
                alt='image'
              />
              <h1 className='clr'>{base.image3_legend}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className='relative overflow-hidden'>
        <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-800 sm:text-6xl dark:text-gray-200'>
              Our Blog
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

      <>
        {/* Card Blog */}
        <div className='max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto'>
          {/* Grid */}
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Card */}
            {resources?.map((item) => (
              <a
                className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]'
                href='#'
              >
                <div className='aspect-w-16 aspect-h-11'>
                  <img
                    className='object-cover w-full rounded-xl'
                    src={useMedia(item.attributes.thumbnail)}
                    alt='Image Description'
                  />
                </div>
                <div className='my-6'>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white'>
                    {item.attributes.title}
                  </h3>
                  <p
                    className='mt-5 text-gray-600 dark:text-gray-400'
                    dangerouslySetInnerHTML={{
                      __html:
                        item.attributes.text
                          .replace(/(<([^>]+)>)/gi, '')
                          .substring(0, 200) + '...',
                    }}
                  ></p>
                </div>
                <div className='flex items-center mt-auto gap-x-3'>
                  <img
                    className='w-8 h-8 rounded-full'
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
                    alt='Image Description'
                  />
                  <div>
                    <h5 className='text-sm text-gray-800 dark:text-gray-200'>
                      By Costnip
                    </h5>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>
    </>
  );
};

export default Index;
