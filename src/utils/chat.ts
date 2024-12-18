import type { ChatMessage } from '../types';

export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function createMessage(content: string, role: 'user' | 'assistant'): ChatMessage {
  return {
    id: generateMessageId(),
    content,
    role,
    timestamp: new Date()
  };
}