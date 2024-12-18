// Replace with your actual OpenAI API key
export const OPENAI_API_KEY = 'your-api-key-here';

export const AI_CONFIG = {
  maxRetries: 3,
  timeout: 30000,
  markSizeTokens: {
    2: 300,
    4: 600,
    8: 1200
  }
} as const;