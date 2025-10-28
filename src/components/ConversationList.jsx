import React from 'react';
import { Search } from 'lucide-react';

const ConversationList = ({ conversations, activeId, onSelect }) => {
  return (
    <aside className="hidden md:flex md:flex-col w-72 border-r border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="p-4 border-b border-gray-200/60 dark:border-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`w-full text-left px-4 py-3 border-b border-gray-100/70 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/70 ${
              activeId === c.id ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
            }`}
          >
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{c.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{c.preview}</p>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default ConversationList;
