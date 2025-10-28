import React, { useMemo, useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ConversationList from './components/ConversationList';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

function App() {
  const initialConversations = useMemo(
    () => [
      {
        id: 'general',
        title: 'General',
        preview: 'Welcome to your new chat!',
        messages: [
          { role: 'assistant', text: 'Welcome! This is your chat workspace. ✨', time: '10:00', delivered: true },
          { role: 'user', text: 'Nice! Let\'s get started.', time: '10:01', delivered: true },
        ],
      },
      {
        id: 'ideas',
        title: 'Ideas',
        preview: 'Collect thoughts and snippets here',
        messages: [
          { role: 'assistant', text: 'Use this space to jot down ideas.', time: '09:12', delivered: true },
        ],
      },
      {
        id: 'notes',
        title: 'Notes',
        preview: 'Quick notes and tasks',
        messages: [],
      },
    ],
    []
  );

  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0].id);

  const activeConversation = conversations.find((c) => c.id === activeId) || conversations[0];

  const handleSend = (text) => {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              preview: text,
              messages: [
                ...c.messages,
                { role: 'user', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), delivered: true },
              ],
            }
          : c
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-7xl h-screen md:h-[95vh] md:my-4 rounded-none md:rounded-2xl border border-gray-200/70 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row bg-white/60 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <ConversationList
          conversations={conversations}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <ChatHeader title={activeConversation.title} subtitle="You • Assistant" />
          <MessageList messages={activeConversation.messages} />
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default App;
