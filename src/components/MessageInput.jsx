import React, { useState } from 'react';
import { Paperclip, Send, Plus } from 'lucide-react';

const MessageInput = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-200/60 dark:border-gray-800 px-3 sm:px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="flex items-end gap-2">
        <button
          type="button"
          className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          aria-label="Add"
        >
          <Plus size={18} />
        </button>
        <div className="flex-1 flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type a message..."
            rows={1}
            className="flex-1 bg-transparent outline-none resize-none text-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
          />
          <button
            type="button"
            aria-label="Attach"
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Paperclip size={18} />
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm"
        >
          <Send size={16} />
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
