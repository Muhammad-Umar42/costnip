import React from 'react';
import { useFetcher } from '@/helpers/fetch';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import DefaultLoading from '@/components/loding';
import { Transition } from '@headlessui/react';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/faqs');
  // console.log(data, isLoading, error);

  if (isLoading) return <DefaultLoading />;
  if (error) return <h1>Error</h1>;

  return (
    <div className='countain'>
      <div className='py-5 '>
        <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
          <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 text-3xl font-bold text-[#132758]   leading-10 sm:text-4xl'>
                FAQ
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                Have questions about Costnip? We might have the answers here.
                These are some common responses that may be helpful.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center lg:w-1/2'>
            <div className='w-full'>
              <img className='object-cover' src='faq.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      <>
        {/* FAQ */}
        <div className='max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-10 mx-auto'>
          {/* End Title */}
          <div className='max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700'>
            {data.data.map((item) => (
              <div className='py-8 first:pt-0 last:pb-0'>
                <div className='flex gap-x-5'>
                  <svg
                    className='flex-shrink-0 w-6 h-6 mt-1 text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                    <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z' />
                  </svg>
                  <div>
                    <h3 className='font-semibold text-gray-800 md:text-lg dark:text-gray-200'>
                      {item.attributes.title}
                    </h3>
                    <p
                      className='mt-1 text-gray-500'
                      dangerouslySetInnerHTML={{
                        __html: item.attributes.body,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End FAQ */}
      </>
    </div>
  );
};

export default Index;
