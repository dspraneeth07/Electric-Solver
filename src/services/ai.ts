import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../config';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateAnswer(
  topic: string,
  question: string,
  markSize: number
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert electrical engineering tutor. Provide detailed, accurate answers for ${markSize}-mark questions about ${topic}. Include relevant formulas, diagrams (using ASCII art if needed), and step-by-step explanations. Focus on clarity and technical accuracy.`
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: markSize * 150, // Adjust response length based on mark size
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    return response.choices[0]?.message?.content || "I apologize, but I couldn't generate an answer.";
  } catch (error) {
    console.error('Error generating answer:', error);
    throw new Error('Failed to generate answer. Please try again.');
  }
}