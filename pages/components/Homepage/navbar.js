import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className='w-[90%] max-w-[1300px] mx-[auto]'>
                    <div className="flex-1" >
                        <img className='w-[150px]' src="costniplogo.png" alt="logo" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Pricecare Search</a></li>
                            <li><a>Health Spotlight</a></li>
                            <li><a>Sign in</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar