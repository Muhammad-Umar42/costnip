import React from 'react';
import Index from '../components/Homepage';
import Chat from '@/components/chatgpt/chat';
import ImageModal from '@/components/image-editor/modal';

const Home = () => {
  return (
    <>
      <ImageModal />

      <Index />
    </>
  );
};

export default Home;
