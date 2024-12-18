import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { validateMessage, sanitizeInput } from '../../utils/validation';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const sanitizedInput = sanitizeInput(input);
    const validationError = validateMessage(sanitizedInput);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    onSend(sanitizedInput);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-4 border-t">
      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          disabled={disabled}
          className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#1E90FF] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !input.trim()}
          className="px-4 py-2 bg-[#1E90FF] text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}