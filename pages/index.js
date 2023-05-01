import React from 'react';
import Index from '../components/Homepage';
import Chat from '@/components/chatgpt/chat';

const Home = () => {
  return (
    <>
      <Chat />
      <Index />
    </>
  );
};

export default Home;
