'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageSquare } from 'lucide-react';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { toast } from 'sonner';

export function ChatPanel() {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, currentUser, addMessage } = useCollaborationStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim() || !currentUser) return;

    const newMessage = {
      id: Date.now().toString(),
      userId: currentUser.id,
      username: currentUser.username,
      color: currentUser.color,
      content: message.trim(),
      timestamp: Date.now()
    };

    addMessage(newMessage);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-950">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2 text-white font-medium">
          <MessageSquare className="h-4 w-4" />
          Team Chat
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 text-sm py-8">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span 
                  className="font-medium"
                  style={{ color: msg.color }}
                >
                  {msg.username}
                </span>
                <span className="text-gray-500">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
              <div className="text-sm text-gray-300 bg-slate-800/50 rounded-lg px-3 py-2">
                {msg.content}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="bg-slate-800 border-slate-700 text-white placeholder-gray-400"
            maxLength={500}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Press Enter to send • Shift+Enter for new line
        </div>
      </div>
    </div>
  );
}