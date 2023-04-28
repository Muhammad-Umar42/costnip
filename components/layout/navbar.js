import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* <div className="navbar bg-base-100">
                <div className='w-[90%] max-w-[1300px] mx-[auto]'>
                    <div className="flex-1" >
                        <Link href="/Homepage">
                            <Image
                                src="/costniplogo.png"
                                alt="Picture of the author"
                                width={150}
                                height={150}
                            />
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="px-1 menu menu-horizontal">
                            <li>
                                <Link href='/pricecare'>Pricecare Search</Link>
                            </li>
                            <li>
                                <Link href='/spotlight'>Health Spotlight</Link>
                            </li>
                            <li>
                                <Link href='#'>Sign in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

      <div className='bg-white border-b border-gray-200'>
        <header className='z-50 flex flex-wrap w-11/12 py-5 text-sm countain sm:justify-start sm:flex-nowrap sm:py-3 '>
          <nav
            className='relative max-w-[1300px] w-full mx-auto  sm:flex sm:items-center sm:justify-between  '
            aria-label='Global'
          >
            <div className='flex items-center justify-between'>
              <Link href='/Homepage'>
                <Image
                  src='/costniplogo.png'
                  alt='Picture of the author'
                  width={150}
                  height={150}
                />
              </Link>
              <div className='sm:hidden'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                  data-hs-collapse='#navbar-collapse-with-animation'
                  aria-controls='navbar-collapse-with-animation'
                  aria-label='Toggle navigation'
                >
                  <svg
                    className='w-4 h-4 hs-collapse-open:hidden'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                    />
                  </svg>
                  <svg
                    className='hidden w-4 h-4 hs-collapse-open:block'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id='navbar-collapse-with-animation'
              className='hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block'
            >
              <div className='flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
                <h1
                  className='font-medium text-blue-600 sm:py-6 dark:text-blue-500'
                  aria-current='page'
                >
                  <Link href='/pricecare'>Pricecare Search</Link>
                </h1>
                <h1 className='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'>
                  <Link href='/spotlight'>Health Spotlight</Link>
                </h1>

                <div className='hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4'></div>
                <Link
                  className='flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500'
                  href='/signin'
                >
                  Sign in
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
