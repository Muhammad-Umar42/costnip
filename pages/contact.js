import React, { useState } from 'react';
import Link from 'next/link';
import DefaultLoading from '@/components/loding';

const Contact = () => {
  const [contact, setContact] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    details: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContact((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const finalData = { data: contact };
    const res = await fetch('https://dev.costnip.org/content/api/contacts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    });

    console.log(res.status);
    if (res.status === 200) {
      setIsSent(true);
      setLoading(false);
    }
  };

  return (
    <>
      {/* ////////////head////////////// */}

      {loading && <DefaultLoading />}

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

      <div className='countain'>
        {isSent && (
          <div
            id='dismiss-alert'
            className='p-4 transition duration-300 border border-teal-200 rounded-md hs-removing:translate-x-5 hs-removing:opacity-0 bg-teal-50'
            role='alert'
          >
            <div className='flex'>
              <div className='flex-shrink-0'>
                <svg
                  className='h-4 w-4 text-teal-400 mt-0.5'
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                </svg>
              </div>
              <div className='ml-3'>
                <div className='text-sm font-medium text-teal-800'>
                  Your Request Sent Successfully
                </div>
              </div>
              <div className='pl-3 ml-auto'>
                <div className='-mx-1.5 -my-1.5'>
                  <button
                    type='button'
                    className='inline-flex bg-teal-50 rounded-md p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-teal-600'
                    data-hs-remove-element='#dismiss-alert'
                  >
                    <span className='sr-only'>Dismiss</span>
                    <svg
                      className='w-3 h-3'
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        d='M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z'
                        fill='currentColor'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Us */}
      <div className='max-w-[85rem] px-4 mb-5  sm:px-6 lg:px-8  mx-auto'>
        <div className='max-w-lg mx-auto mt-12'>
          {/* Card */}
          <div className='flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8 dark:border-gray-700'>
            <h2 className='mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200'>
              Fill in the form
            </h2>
            <form onSubmit={handleSubmit}>
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
                      required
                      onChange={handleChange}
                      type='text'
                      name='first_name'
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
                      required
                      onChange={handleChange}
                      type='text'
                      name='last_name'
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
                      required
                      onChange={handleChange}
                      type='email'
                      name='email'
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
                      onChange={handleChange}
                      type='text'
                      name='phone'
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
                    required
                    onChange={handleChange}
                    id='hs-about-contacts-1'
                    name='details'
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
