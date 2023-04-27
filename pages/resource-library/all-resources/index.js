import React from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import DefaultLoading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';

const Index = () => {
  const { data, isLoading, error } = useFetcher(
    '/api/resource-categories?populate[resources][populate][0]=photoUrl'
  );
  const {
    data: rdata,
    isLoading: rloading,
    error: rerror,
  } = useFetcher('/api/resources?populate=*');

  // console.log(data);
  if (isLoading || rloading) return <DefaultLoading />;
  if (error || rloading) return <h1>Error</h1>;

  return (
    <>
      {/* ////////////////head/////////// */}
      <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-16'>
        <div className='text-[#132758]'>
          <h1 className='pb-8 text-5xl font-bold'> Resource Library </h1>

          <div className='flex'>
            <h1 className='text-lg max-w-[520px] pb-8'>
              {' '}
              Costnip understands your health care experience doesn’t start and
              stop at a health care facility. Search for resources for health
              insurance, pharmacies, medical devices, and more.
            </h1>
          </div>
        </div>
        <div className='text-center'>
          <Image
            className='mx-[auto]'
            src='/resource.png'
            width={200}
            height={300}
            alt='image'
          />
        </div>
      </div>
      {/* ////////////////head/////////// */}
      {/* ////////////////tabs/////////// */}
      <div className='py-12 bg-gray-200'>
        <div className='countain'>
          <h1 className='pb-4 text-2xl font-bold'>All Resources and Tools</h1>
          <Tab.Group>
            <div className='grid grid-cols-3 '>
              <Tab.List>
                <Tab className='block mb-3 outline-0'>All</Tab>
                {data.data.map((item) => {
                  return (
                    <div>
                      <Tab className='block mb-3 outline-0'>
                        {item.attributes.name}
                      </Tab>
                    </div>
                  );
                })}
              </Tab.List>

              <Tab.Panels className='col-span-2'>
                <Tab.Panel className=''>
                  {rdata.data.map((item) => (
                    <div>
                      <div className='divider'></div>
                      <div className='block p-4 mb-3 bg-white rounded-lg md:flex'>
                        <div className='m-[auto]'>
                          <img
                            src={useMedia(item.attributes.photoUrl)}
                            alt='Picture of the author'
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className='px-4'>
                          <h1 className='font-bold'>{item.attributes.name}</h1>
                          <div className='divider'></div>
                          <h1
                            dangerouslySetInnerHTML={{
                              __html: item.attributes.description,
                            }}
                          ></h1>
                          <h6 className='font-bold text-blue-600'>
                            Learn more
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
                {data.data.map((item) => {
                  return (
                    <div>
                      <Tab.Panel className=''>
                        <h1 className='text-xl font-bold'>
                          {' '}
                          {item.attributes.name}{' '}
                        </h1>
                        {item.attributes.resources.data.map((tabData) => {
                          return (
                            <div>
                              <div className='divider'></div>
                              <div className='block p-4 mb-3 bg-white rounded-lg md:flex'>
                                <div className='m-[auto]'>
                                  <img
                                    src={useMedia(tabData.attributes.photoUrl)}
                                    alt='Picture of the author'
                                    width={150}
                                    height={150}
                                  />
                                </div>
                                <div className='px-4'>
                                  <h1 className='font-bold'>
                                    {tabData.attributes.name}
                                  </h1>
                                  <div className='divider'></div>
                                  <h1
                                    dangerouslySetInnerHTML={{
                                      __html: tabData.attributes.description,
                                    }}
                                  ></h1>
                                  <h6 className='font-bold text-blue-600'>
                                    Learn more
                                  </h6>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Tab.Panel>
                    </div>
                  );
                })}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
      {/* ////////////////tabs/////////// */}
      {/* ////////////////tabs/////////// */}
    </>
  );
};

export default Index;
