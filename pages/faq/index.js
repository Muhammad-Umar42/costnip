import React from 'react';
import { useFetcher } from '@/helpers/fetch';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import DefaultLoading from '@/components/loding';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/faqs');
  // console.log(data, isLoading, error);

  if (isLoading) return <DefaultLoading />;
  if (error) return <h1>Error</h1>;

  return (
    <div>

      {/* <Head /> */}
      <div className='countain py-12'>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='clr  m-auto'>
            <h1 className='font-bold text-xl'>FAQs</h1>
            <h1 className='w-full max-w-[450px]'>Have questions about Costnip? We might have the answers here. These are some common responses that may be helpful.</h1>
          </div>
          <div>
            <img className='max-w-[250px] w-full mx-[auto]' src="faq.png" alt="image" />
          </div>
        </div>
      </div>
      {/* <Head /> */}
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
                        className={`${open ? 'rotate-180 transform' : ''
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

    </div>
  );
};

export default Index;
