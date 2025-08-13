import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  console.log('🚀 AI Chat API called');

  try {
    // Validate API key configuration
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here') {
      console.error('❌ OpenAI API key not configured');

      // Return user-friendly error in streaming format
      const errorStream = new ReadableStream({
        start(controller) {
          const errorMessage = 'OpenAI API key is not configured. Please add your API key to the environment variables.';
          controller.enqueue(new TextEncoder().encode(`3:"${errorMessage}"\n`));
          controller.close();
        }
      });

      return new Response(errorStream, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'x-vercel-ai-data-stream': 'v1'
        }
      });
    }

    const { messages } = await req.json();
    console.log('📝 Processing', messages.length, 'message(s)');

    // Use AI SDK for proper streaming
    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      messages,
      system: 'You are a helpful AI assistant. Provide clear, concise, and helpful responses.',
      maxTokens: 500,
      temperature: 0.7,
    });

    console.log('✅ Streaming response created');
    return result.toDataStreamResponse();

  } catch (error) {
    console.error('❌ API Error:', error);

    // Handle different types of errors with user-friendly messages
    let errorMessage = 'An unexpected error occurred. Please try again.';

    if (error instanceof Error) {
      if (error.message.includes('quota')) {
        errorMessage = 'OpenAI API quota exceeded. Please check your billing settings or try again later.';
      } else if (error.message.includes('rate limit')) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (error.message.includes('invalid')) {
        errorMessage = 'Invalid API configuration. Please check your OpenAI API key.';
      }
    }

    // Return error in streaming format
    const errorStream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(`3:"${errorMessage}"\n`));
        controller.close();
      }
    });

    return new Response(errorStream, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1'
      }
    });
  }
}
