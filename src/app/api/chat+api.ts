import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { UIMessage, convertToModelMessages, stepCountIs, streamText, tool } from 'ai';
import  productData  from './products';
import { z } from 'zod';

// Schema for the parameters of our tool
const recommendationSchema = z.object({
  recommendations: z
    .array(
      z.object({
        title: z.string().describe('The full title of the product.'),
        price: z.string().describe('The current selling price of the product.'),
        mrp_price: z.string().describe('The original Manufacturer Recommended Price.'),
        discount: z.string().describe('The discount percentage.'),
        image: z.string().url().describe('The URL of the primary product image.'),
        url: z.string().url().describe('The URL to the product page.'),
      }),
    )
    .min(1)
    .max(5)
    .describe('An array of 1 to 5 product recommendations based on the user query.'),
  headline: z.string().describe('A catchy headline for the recommendations section.'),
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
  });

  // Modify the system prompt to guide the AI on when to use the tool
  const systemPrompt = `
    You are a friendly and expert product recommendation assistant for an e-commerce store called "Epik".
    - For general conversation, like greetings or questions about the store, respond in a helpful, conversational manner.
    - When a user asks for product recommendations or seems to be looking for products, you MUST call the "showProductRecommendations" tool.
    - Use the provided product catalog to find the best matches.

    Here is the full catalog of available products:
    ${JSON.stringify(productData, null, 2)}
  `;

  const messagesWithSystemPrompt = [
    { role: 'system' as const, content: systemPrompt },
    ...convertToModelMessages(messages),
  ];

  const result = await streamText({
    model: openrouter('deepseek/deepseek-chat-v3.1:free'),
    messages: messagesWithSystemPrompt,
    stopWhen:stepCountIs(2),
    // Define the tool that the AI can choose to call
    tools: {
      showProductRecommendations: tool({
        description: 'Display product recommendations to the user in a rich UI card format.',
        inputSchema: recommendationSchema,
      }),
    },
  });

  // Use toAIStreamResponse which handles streaming text and tool calls
  return result.toUIMessageStreamResponse({
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'none',
    },
  });
}