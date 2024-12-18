import React, { useState } from 'react';
import { ChatMessage } from '../../types';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import { ChatInput } from './ChatInput';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { createMessage } from '../../utils/chat';
import { generateAnswer } from '../../services/ai';
import { marked } from 'marked';
import MarkedReact from 'marked-react';

interface ChatInterfaceProps {
  topic: string;
}

export function ChatInterface({ topic }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [markSize, setMarkSize] = useState<2 | 4 | 8>(2);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (content: string) => {
    // Add user message
    const userMessage = createMessage(content, 'user');
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    try {
      const answer = await generateAnswer(topic, content, markSize);
      
      const aiMessage = createMessage(answer, 'assistant');
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = createMessage(
        'Sorry, I encountered an error. Please try again.',
        'assistant'
      );
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <ChatHeader 
        topic={topic}
        markSize={markSize}
        onMarkSizeChange={setMarkSize}
      />
      <ChatMessageList messages={messages} />
      <div className="px-4 py-2">
        {isLoading && (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
            <span className="ml-2 text-gray-600">Generating answer...</span>
          </div>
        )}
      </div>
      <ChatInput 
        onSend={handleSend}
        disabled={isLoading}
      />
    </div>
  );
}