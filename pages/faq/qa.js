import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Qa = () => {
    return (
        <>
            <div className="w-full px-4 py-16  countain">
                <div className="mx-auto w-full   bg-white p-2 hover:bg-gray-100">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between border-b border-solid px-4 py-4 text-left text-sm font-medium outline-0">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 `}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                </div>
            </div>
        </>
    )
}

export default Qa