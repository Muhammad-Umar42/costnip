import React from 'react'
import Header from './header'
import Navbar from './navbar'
import Price from './price'
import Lowercost from './lowercost'
import Chatbox from './chatbox'
import Constnipvideo from './constnipvideo'
import Email from './email'
import Footer from '../footer'

const Index = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Price />
            <Lowercost />
            <Chatbox />
            <Constnipvideo />
            <Email />
            <Footer />

        </>
    )
}

export default Index