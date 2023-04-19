import React from 'react';
import Head from './head';
import Navbar from '../Homepage/navbar';
import Footer from '../footer';
import Qa from './qa';
import { useFetcher } from '@/helpers/fetch';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/faqs');
  console.log(data, isLoading, error);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <Navbar />
      <Head />
      <div className='w-full px-4 py-16 countain'>
        <div className='w-full p-2 mx-auto bg-white hover:bg-gray-100'>
          {data.data.map((item) => {
            return (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-4 py-4 text-sm font-medium text-left border-b border-solid outline-0'>
                      <span> {item.attributes.title} </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                      {item.attributes.body}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
