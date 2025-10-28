import React from 'react';
import { MessageCircle, MoreVertical, User } from 'lucide-react';

const ChatHeader = ({ title = 'New Chat', subtitle = 'Start a conversation', onMenu }) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200/60 dark:border-gray-800 px-4 sm:px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3 min-w-0">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white grid place-content-center shadow-sm">
          <MessageCircle size={20} />
        </div>
        <div className="min-w-0">
          <h1 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 truncate">{title}</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex items-center gap-1">
            <User size={14} className="text-gray-400" />
            {subtitle}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onMenu}
        aria-label="Open menu"
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
      >
        <MoreVertical size={18} />
      </button>
    </header>
  );
};

export default ChatHeader;
