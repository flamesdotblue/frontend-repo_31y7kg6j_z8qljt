import React, { useEffect, useRef } from 'react';
import { Check, CheckCheck, User } from 'lucide-react';

const Bubble = ({ role, text, time, delivered }) => {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}> 
      {!isUser && (
        <div className="mr-2 mt-6 h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 grid place-content-center text-gray-600 dark:text-gray-300">
          <User size={16} />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
        isUser
          ? 'bg-indigo-600 text-white rounded-br-none'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none'
      }`}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
        <div className={`mt-1 flex items-center gap-1 ${isUser ? 'text-indigo-100/80' : 'text-gray-500'} text-[10px]`}> 
          <span>{time}</span>
          {isUser && (delivered ? <CheckCheck size={12} /> : <Check size={12} />)}
        </div>
      </div>
      {isUser && (
        <div className="ml-2 mt-6 h-8 w-8" />
      )}
    </div>
  );
};

const MessageList = ({ messages }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 bg-white dark:bg-gray-900">
      {messages.length === 0 ? (
        <div className="h-full w-full flex items-center justify-center text-center text-gray-500 dark:text-gray-400">
          <div>
            <p className="text-lg font-medium">No messages yet</p>
            <p className="text-sm">Say hello to start the conversation.</p>
          </div>
        </div>
      ) : (
        messages.map((m, idx) => <Bubble key={idx} {...m} />)
      )}
    </div>
  );
};

export default MessageList;
