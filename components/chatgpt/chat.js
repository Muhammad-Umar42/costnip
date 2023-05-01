import React, { useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

const Chat = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setUserMessages((prev) => [...prev, message]);

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };
    const prefix =
      'do not answer or complete my question if it not related to healthcare topics : Create a healthcare chatbot that can answer general health-related questions, provide basic advice, and offer resources for further information. The chatbot should be able to understand user input in natural language, respond appropriately, and maintain a conversational tone.';
    const payload = {
      model: 'text-davinci-003',
      prompt: prefix + responses?.join('\n') + '\n' + message,
      temperature: 0.7,
      max_tokens: 400,
    };

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/completions',
        payload,
        config
      );
      const chatbotResponse = res.data.choices[0].text;
      console.log(chatbotResponse, 'res');
      setResponses((prev) => [...prev, chatbotResponse]);
    } catch (error) {
      console.error(error);
      setResponses('An error occurred while fetching the response.');
    }
  };

  return (
    <>
      {userMessages?.map((item, i) => (
        <div key={item + i}>
          <div className='chat chat-end'>
            <div className='chat-bubble'> {item} </div>
          </div>

          {responses[i]?.length > 0 && (
            <div className='chat chat-start'>
              <div className='chat-bubble'>
                <Typewriter
                  options={{
                    strings: responses[i],
                    autoStart: true,
                    delay: 20,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className='w-full max-w-xs input input-bordered'
          onChange={handleChange}
          type='text'
          name='message'
        />
        <button type='submit' className='btn' onClick={handleSubmit}>
          Chat
        </button>
      </form>
    </>
  );
};

export default Chat;
