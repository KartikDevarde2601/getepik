import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();


  const openrouter = createOpenRouter({
    apiKey:'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',
  });

  const result = streamText({
    model: openrouter('deepseek/deepseek-chat-v3.1:free'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'none',
    },
  });
}