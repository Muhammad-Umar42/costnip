import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <>
      {/* ////////////head////////////// */}

      <div className='py-5 countain '>
        <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
          <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 text-3xl font-bold text-[#132758]   leading-10 sm:text-4xl'>
                Drop Us A Line We Love Helping
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                If you have a question about Costnip, chances are you can find
                the answer in our{' '}
                <Link href={'/faq'} className='text-[#132758]   underline'>
                  FAQs
                </Link>{' '}
                section
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center lg:w-1/2'>
            <div className='w-full'>
              <img className='object-cover' src='contact.png' alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className='max-w-[85rem] px-4 mb-5  sm:px-6 lg:px-8  mx-auto'>
        <div className='max-w-lg mx-auto mt-12'>
          {/* Card */}
          <div className='flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8 dark:border-gray-700'>
            <h2 className='mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200'>
              Fill in the form
            </h2>
            <form>
              <div className='grid gap-4 lg:gap-6'>
                {/* Grid */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6'>
                  <div>
                    <label
                      htmlFor='hs-firstname-contacts-1'
                      className='block text-sm font-medium text-gray-700 dark:text-white'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='hs-firstname-contacts-1'
                      className='block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='hs-lastname-contacts-1'
                      className='block text-sm font-medium text-gray-700 dark:text-white'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='hs-lastname-contacts-1'
                      id='hs-lastname-contacts-1'
                      className='block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    />
                  </div>
                </div>
                {/* End Grid */}
                {/* Grid */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6'>
                  <div>
                    <label
                      htmlFor='hs-email-contacts-1'
                      className='block text-sm font-medium text-gray-700 dark:text-white'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='hs-email-contacts-1'
                      id='hs-email-contacts-1'
                      autoComplete='email'
                      className='block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='hs-phone-number-1'
                      className='block text-sm font-medium text-gray-700 dark:text-white'
                    >
                      Phone Number
                    </label>
                    <input
                      type='text'
                      name='hs-phone-number-1'
                      id='hs-phone-number-1'
                      className='block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor='hs-about-contacts-1'
                    className='block text-sm font-medium text-gray-700 dark:text-white'
                  >
                    Details
                  </label>
                  <textarea
                    id='hs-about-contacts-1'
                    name='hs-about-contacts-1'
                    rows={4}
                    className='block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    defaultValue={''}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div className='grid mt-6'>
                <button
                  type='submit'
                  className='inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800'
                >
                  Send inquiry
                </button>
              </div>
              <div className='mt-3 text-center'>
                <p className='text-sm text-gray-500'>
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Contact Us */}

      {/* ====== Contact Section End */}
    </>
  );
};

export default Contact;
