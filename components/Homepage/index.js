import React from 'react';
import ChatModel from '../chatgpt/modal';
const Index = () => {
  return (
    <>
      {/* <Header /> */}
      <div className='bg-[#203d86]'>
        <div className='w-[90%] max-w-[1300px] mx-[auto] grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h1 className='text-white text-[41px] font-black mt-[80px] mb-[20px]'>
              Never Overpay For Healthcare Again
            </h1>
            <h3 className='text-white text-xl pb-[100px]'>
              A community-driven healthcare price sharing and comparison
              platform. Find nearby lower cost options.
            </h3>
          </div>
          <div className='flex items-center justify-center'>
            <img
              className='w-[220px] mb-12 md:mb-0'
              src='head-img.png'
              alt='logo'
            />
          </div>
        </div>
      </div>
      <div className='w-[80%] md:w-[70%] max-w-[1300px] mt-[-50px] mx-[auto] bg-white rounded-xl p-[25px] shadow-lg'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div className='flex items-center justify-center border-r-2 border-gray-600 border-solid'>
            <img className='w-[25px] ' src='help.png' alt='doctor' />
            <select className='pl-[10px] mr-[20px] w-[130px] text-gray-500 text-[18px] '>
              <option value='Medical'>Medical</option>
            </select>
          </div>
          <div className='flex items-center justify-center border-r-2 border-gray-600 border-solid'>
            <img className='w-[25px]  mr-[15px]' src='search.png' alt='icon' />
            <input
              className='outline-0'
              type='text'
              placeholder='Enter service'
            />
          </div>
          <div className='flex items-center justify-center border-r-2 border-gray-600 border-solid'>
            <img
              className='w-[25px]  mr-[15px]'
              src='location.png'
              alt='icon'
            />
            <input
              className='outline-0'
              type='text'
              placeholder='Enter zipcode'
            />
          </div>
          <div className='flex justify-center'>
            <button className=' bg-[#443cf4] text-white text-2xl p-[5px] max-w-[170px] rounded-[20px] leading-6'>
              pricecare search
            </button>
          </div>
        </div>
      </div>
      {/* <Header /> */}
      {/* <Price /> */}
      <div className='bg-gray-50 py-14'>
        <div className='text-center'>
          <h3 className='pb-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            mollitia.
          </h3>
        </div>
        <div className='w-[90%] max-w-[1300px] mx-[auto] text-center grid grid-cols-1 gap-y-10 md:grid-cols-3 '>
          <div className='text-center'>
            <h1 className='pb-3 text-6xl font-black'>$1000 </h1>
            <h4 className='text-lg font-semibold'>with a cigna plan </h4>
          </div>
          <div className='text-center'>
            <h1 className='pb-3 text-6xl font-black'>$1000 </h1>
            <h4 className='text-lg font-semibold'>with a cigna plan </h4>
          </div>
          <div className='text-center'>
            <h1 className='pb-3 text-6xl font-black'>$1000 </h1>
            <h4 className='text-lg font-semibold'>with a cigna plan </h4>
          </div>
        </div>
      </div>
      {/* <Price /> */}
      {/* <Lowercost /> */}
      <div className='text-center py-14 bg-[#203d86]'>
        <h3 className='pb-4 text-lg font-medium text-white'>
          join the movement to lower costs
        </h3>
        <div className='bg-gray-50 w-[90%] max-w-[415px] mx-[auto] rounded-2xl pb-4'>
          <h2 className='py-3 text-gray-600 '>Uploaded Charges</h2>
          <img className='mx-[auto]' src='lowprice.webp' alt='' />
        </div>
      </div>
      {/* <Lowercost /> */}
      {/* <Chatbox /> */}
      <div className='grid grid-cols-1 gap-y-10 md:grid-cols-3 w-[90%] max-w-[1300px] mx-[auto] py-20'>
        <div>
          <img className='w-24 mx-[auto]' src='chat-img.png' alt='Q&A' />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-blue-800'>
            Costnip Health Chatbox
          </h1>
          <h1 className='text-2xl text-blue-800 font-normal max-w-[285px]'>
            Ask any health question, get instant answer
          </h1>
        </div>
        <div className='flex items-center'>
          <ChatModel />
        </div>
      </div>
      {/* <Chatbox /> */}
      {/* <Constnipvideo /> */}
      <div className='bg-[#203d86]'>
        <div className='  py-14 w-11/12 max-w-[1300px] mx-[auto]'>
          <h1 className='pb-4 text-2xl text-center text-white'>
            Learn about Costnip
          </h1>
          <video controls className='max-w-[500px] w-full mx-[auto]'>
            <source src='Best tabla performance720p.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      {/* <Constnipvideo /> */}
      {/* <Email /> */}
      <div className='w-[90%] max-w-[1300px] mx-[auto] text-center py-10'>
        <h1 className='text-[#132758] max-w-[325px] mx-[auto] font-medium text-xl pb-4'>
          Subscribe for updates and savings recommendation
        </h1>
        <input
          className='border border-solid border-gray-400 py-[7px] mr-3 px-2'
          type='email'
          placeholder='Email'
        />
        <button className='bg-[#132758] text-white font-semibold py-2 px-4 text-base'>
          Subscribe
        </button>
      </div>
      {/* <Email /> */}
    </>
  );
};

export default Index;
