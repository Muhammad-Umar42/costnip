import React from 'react'

const Head = () => {
    return (
        <>
            <div className='bg-[#ebf3ff]'>
                <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1300px] mx-[auto] py-12">
                    <div>
                        <h1 className='font-semibold text-3xl clr'>Costnip's Health Spotlight</h1>
                        <h1 className='clr md:pt-4 md:pb-4 pb-12 pt-4 '>Empowering value-based information exchanges</h1>
                    </div>
                    <div className='flex justify-evenly'>
                        <div>
                            <img className='max-w-[50px] w-full mx-[auto] ' src="pestives.svg" alt="image" />
                            <h1 className='clr'>Perspestives</h1>
                        </div>
                        <div>
                            <img className='max-w-[50px] w-full mx-[auto] ' src="pestives.svg" alt="image" />
                            <h1 className='clr'>Perspestives</h1>
                        </div>
                        <div>
                            <img className='max-w-[50px] w-full mx-[auto] ' src="pestives.svg" alt="image" />
                            <h1 className='clr'>Perspestives</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Head