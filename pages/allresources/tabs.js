import React from 'react'
import { Tab } from '@headlessui/react'


const Tabs = () => {

    return (
        <>
            <Tab.Group>
                <div className="grid grid-cols-3 countain">
                    <Tab.List>
                        <Tab className='block'>Tab 1</Tab>
                        <Tab className='block'>Tab 2</Tab>
                        <Tab className='block'>Tab 3</Tab>
                    </Tab.List>
                    <Tab.Panels className='col-span-2'>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </>
    )
}

export default Tabs