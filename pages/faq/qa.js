import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Qa = ({ data = [] }) => {
  return (
    <>
      <div className='w-full px-4 py-16 countain'>
        <div className='w-full p-2 mx-auto bg-white hover:bg-gray-100'>
          <Disclosure>
            {({ open }) => (
              <>
                {data?.map((item) => {
                  return (
                    <>
                      <Disclosure.Button className='flex justify-between w-full px-4 py-4 text-sm font-medium text-left border-b border-solid outline-0'>
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 `}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  );
                })}
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default Qa;
