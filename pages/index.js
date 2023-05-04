import React from 'react';
import Index from '../components/Homepage';
import Chat from '@/components/chatgpt/chat';
import ImageEditor from '@/components/image-editor';

const Home = () => {
  return (
    <>
      <ImageEditor />

      <Index />
    </>
  );
};

export default Home;
