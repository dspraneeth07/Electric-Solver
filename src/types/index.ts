export interface Unit {
  id: number;
  title: string;
  description: string;
  topics: string[];
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}