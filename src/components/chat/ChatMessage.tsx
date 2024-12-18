import React from 'react';
import { formatTimestamp } from '../../utils/chat';
import MarkedReact from 'marked-react';
import type { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? 'bg-[#1E90FF] text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        <div className="mb-1 prose prose-sm">
          {isUser ? (
            message.content
          ) : (
            <MarkedReact>{message.content}</MarkedReact>
          )}
        </div>
        <div className={`text-xs ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
}