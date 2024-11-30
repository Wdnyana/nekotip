import React from 'react';
import { messages } from '@/store/textSupportGiven';

const TabMessage = () => {
  return (
    <div className="space-y-2">
      {messages.map((message) => (
        <div
          key={message.id}
          className="rounded-md bg-mainAccent px-6 py-4 shadow"
        >
          <div className="flex items-center gap-3">
            <img
              className="h-16 w-16 md:h-20 md:w-20"
              alt="User Profile"
              src="/images/profile-pic.png"
              loading="eager"
            ></img>
            <h3 className="text-xl font-semibold md:text-2xl">
              {message.sender}
            </h3>
          </div>
          <p className="mt-5">{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TabMessage;
