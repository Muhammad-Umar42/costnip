import React from 'react'

const Head = () => {
    return (
        <>
            <div className='countain py-12'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='clr  m-auto'>
                        <h1 className='font-bold text-xl'>FAQs</h1>
                        <h1 className='w-full max-w-[450px]'>Have questions about Costnip? We might have the answers here. These are some common responses that may be helpful.</h1>
                    </div>
                    <div>
                        <img className='max-w-[250px] w-full mx-[auto]' src="faq.png" alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head