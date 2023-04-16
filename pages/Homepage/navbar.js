import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className='w-[90%] max-w-[1300px] mx-[auto]'>
                    <div className="flex-1" >
                        <Link href="/Homepage">
                            <img className='w-[150px]' src="costniplogo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link href='/priceCare'>Pricecare Search</Link>
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
            </div>


        </>
    )
}

export default Navbar

//how to use routing?   