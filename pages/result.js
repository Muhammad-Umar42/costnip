import React, { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/result/hero';

const result = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default result;

////////////////////////Head////////////////////////////
// <div className="bg-[#3063E0] py-20 mb-20">
//     <div className="grid grid-cols-1 countain md:grid-cols-2">
//         <div>
//             <h1 className='max-w-[350px] text-4xl font-bold text-white'>Never Overpay For Healthcare Again</h1>

//             <h3 className='max-w-[450px] text-white pt-8'>Compare and share prices facilities have charged in the past. See what others were charged and make informed decisions!</h3>
//         </div>
//         <div>
//             <img className='w-0 md:w-fit' src="/result.png" alt="" />
//         </div>
//     </div>
// </div>
// {/* ////////////////////////Head//////////////////////////// */}

// <div className="grid grid-cols-1 md:grid-cols-4 countain">

//     {/* ////////////////sideBar/////////////// */}
//     <div className=''>
//         <Image className='w-full pb-4 md:w-10/12' src="/upload.png" alt="image" width={220} height={100} />
//         <Image className='w-full pb-4 md:w-10/12' src="/location2.png" alt="image" width={220} height={100} />
//         <Image className='w-full pb-4 md:w-10/12' src="/doctor.png" alt="image" width={220} height={100} />
//     </div>

//     {/* ////////////////sideBar/////////////// */}

//     <div className='col-span-3'>
//         <div>

//             <h1 className='font-semibold text-gray-400'> <span className='text-gray-800'>Results</span> - knee replacement (3) </h1>
//         </div>

//         <div>
//             {/* /////////////hospitalCARDS//////////////// */}
//             <div className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-3">
//                 {/* //////////CarD-Start//////// */}
//                 <div className='grid grid-cols-2 border border-gray-200 border-solid rounded-md'>
//                     <div className='m-[auto] pl-4'>
//                         <img className='w-12 pb-2' src="hospital.png" alt="" />
//                         <h1 className='pb-2 text-xs font-bold'>LOCATION <span className='rounded-full bg-[#43AA8B] text-white text-center p-[2px] text-[8px] font-semibold'> 3 miles away </span></h1>
//                         <h3 className='text-xs '>Genral Hospital</h3>
//                         <h3 className='text-xs text-gray-400'>123 Main st. Chicago, IL 20202</h3>
//                     </div>
//                     <div className='m-[auto]'>
//                         <h1 className='font-semibold'><span className='text-xs text-gray-600'>$</span>64.82 &#8605;</h1>
//                         <h1 className='text-gray-400 text-[8px] mb-2'>Hospital Reported Cash Price</h1>
//                         {/* /////////// */}
//                         <h1 className='font-semibold'><span className='text-xs text-gray-600'>$</span>40</h1>
//                         <h1 className='text-gray-400 text-[8px] mb-2'>User Reported Cash Price</h1>
//                         {/* /////////// */}
//                         <h1 className='font-semibold underline'>see here</h1>
//                         <h1 className='text-gray-400 text-[8px] mb-2'>insurer Reported Cash Price</h1>
//                     </div>
//                 </div>
//                 {/* //////////CarD-END//////// */}

//             </div>

//             {/* /////////////hospitalCARD//////////////// */}

//             <div className="grid grid-cols-1 md:grid-cols-3 bg-[#CDDCFF] py-12 px-8 my-12 rounded-lg">
//                 <div className='col-span-2'>
//                     <h3 className='mb-6 text-xl text-gray-500'>Lipsum subtitle</h3>
//                     <h1 className='text-gray-800 font-semibold text-5xl mb-6 max-w-[500px]'>Placeholder title goes here for visuals</h1>
//                     <h3 className='mb-6 text-xl text-gray-500'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'. <span className='text-blue-500 underline'> Learn more </span></h3>
//                     <h4 className='text-gray-800'>Explore More <button className='text-white bg-black px-2.5 py-1 rounded-full ml-3'> &#62; </button></h4>
//                 </div>
//                 <div>
//                     <img src="graph.png" alt="graph" className='w-full' />
//                 </div>
//             </div>

//         </div>

//         <div>
//             <h1 className='font-bold'>Featured Listings</h1>

//             <div className="grid grid-cols-3 p-8 my-4 rounded-lg shadow-xl md:grid-cols-6">
//                 <div className='m-[auto]'>
//                     <img src="hospital.png" alt="image" /> </div>
//                 <div className='col-span-2'>
//                     <h3 className='rounded-full bg-[#43AA8B] text-white text-center p-1 mx-[auto] max-w-[130px]'> 3 miles away </h3>
//                     <h2 className='text-2xl font-semibold text-center'>Atlanta Hospital</h2>
//                     <h3 className='text-center txt-gray-300'>123 Main st. Chicago, IL 20202</h3>
//                 </div>
//                 <div className='text-center m-[auto]'>
//                     <h2 className='text-xs'>User reported PRICE</h2>
//                     <h1 className='text-2xl font-bold'>$250</h1>
//                 </div>
//                 <div className='text-center m-[auto]'>
//                     <h2 className='text-xs'>HOSPITAL CASH PRICE</h2>
//                     <h1 className='text-2xl font-bold'>$175</h1>
//                 </div>
//                 <div className='text-center m-[auto]'>
//                     <h2 className='text-xs'>Insurer Reported Cost</h2>
//                     <h1 className='text-xl font-bold'>See here</h1>
//                 </div>
//             </div>
//         </div>

//     </div>

// </div>
