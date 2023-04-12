import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-[96%] mx-[auto] grid grid-cols-2'>
                <div className="logo">
                    <img className='w-[150px]' src="costniplogo.png" alt="logo" />
                </div>
                <div className="tabs  ml-[auto] flex items-center">
                    <ul className='flex'>
                        <li className='pl-[60px]'><a href="#">pricecare Search</a></li>
                        <li className='pl-[60px]'><a href="#">Health Spotlight</a></li>
                        <li className='pl-[60px]'><a href="#">Sign in</a></li>
                    </ul>
                </div>
            </div>



        </>
    )
}

export default Navbar