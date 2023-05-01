import React from 'react';

const Hero = () => {
  return (
    <section className='countain bg-[#3063E0] rounded-2xl py-10 !my-8'>
      <div className='px-6 m-auto '>
        <div className='grid grid-cols-4 max-w-[1000px] mx-auto gap-6 place-items-center md:grid-cols-8 lg:grid-cols-12'>
          <div className='col-span-4 lg:col-span-7'>
            <h1 className='text-4xl text-white'>
              Never Overpay For Healthcare Again
            </h1>
            <p className='text-white pt-7'>
              Compare and share prices facilities have charged in the past. See
              what others were charged and make informed decisions!
            </p>
          </div>
          <div className='col-span-4 lg:col-span-5'>
            <img src='result.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
