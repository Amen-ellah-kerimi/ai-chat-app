import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here') {
      console.error('OpenAI API key is not configured properly');
      return new Response(
        JSON.stringify({
          error: 'OpenAI API key is not configured. Please set OPENAI_API_KEY in your environment variables.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const { messages } = await req.json();

    console.log('Received messages:', messages);
    console.log('Using OpenAI API key:', process.env.OPENAI_API_KEY?.substring(0, 10) + '...');

    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      messages,
      system: 'You are a helpful AI assistant. Provide clear, concise, and helpful responses.',
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing your request.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
