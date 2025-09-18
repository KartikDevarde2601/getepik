import { useState, useRef, useEffect } from 'react';
import {generateAPIUrl} from '../utils/generateAPIUrl'
import {
View,
ScrollView,
XStack,
YStack,
Button,
Text,
Input
 } from 'tamagui'
 import {BotMessageSquare,History,Send} from '@tamagui/lucide-icons'
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { fetch as expoFetch } from 'expo/fetch';
import { KeyboardAvoidingView,Platform } from 'react-native';
import { useTheme } from 'tamagui';


// ✅ OpenRouter headers
const OPENROUTER_HEADERS = {
  Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
  'HTTP-Referer': 'https://yourapp.com', // required by OpenRouter
  'X-Title': 'My Expo Chat App',         // optional, helps OpenRouter dashboard
};

export default function ChatUI() {
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const theme = useTheme()

   const { messages, error, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch,
      api: generateAPIUrl('/api/chat'),
    }),
    onError: error => console.error(error, 'ERROR'),
  });

  if (error) return <Text>{error.message}</Text>;

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  if (error) return <Text>{error}</Text>;

  const handleSend = () => {
    if (!input.trim()) return;

    sendMessage({
      text: input,
    });

    setInput('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} // Adjust this offset as needed
    >
    <YStack flex={1} height="100%" padding='$2'>
      {/* Chat Header */}
      <XStack
        padding="$3"
        borderBottomWidth={1}
        borderBottomColor="$borderColor"
        backgroundColor="$background"
        alignItems="center"
        gap="$2"
      >
        <Button
                      size="$4"
                      circular
                      elevate
                      disabled={true}
                      theme="active"
                      icon={BotMessageSquare}
                      scaleIcon={2}
                      backgroundColor={theme.$blue9}
                    />
        <YStack flex={1}>
          <Text fontWeight="600" fontSize="$4">
            AI Assistant
          </Text>
          <Text fontSize="$2" color="$color10">
            Online
          </Text>
        </YStack>
        <History size={24} color={theme.color10} />
      </XStack>
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1, padding: 12 }}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {messages.map((m) => (
            <View
              key={m.id}
              style={{
                marginVertical: 6,
                flexDirection: 'row',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <View
                style={{
                  maxWidth: '75%',
                  padding: 10,
                  borderRadius: 18,
                  backgroundColor: m.role === 'user' ? '#007AFF' : 'h',
                  borderBottomRightRadius: m.role === 'user' ? 4 : 18,
                  borderBottomLeftRadius: m.role === 'user' ? 18 : 4,
                }}
              >
                {m.parts.map((part, i) => {
                  if (part.type === 'text') {
                    return (
                      <Text
                        key={`${m.id}-${i}`}
                        style={{
                          color: m.role === 'user' ? 'white' : 'black',
                          fontSize: 16,
                          lineHeight: 20,
                        }}
                      >
                        {part.text}
                      </Text>
                    );
                  }
                  return null;
                })}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
      <XStack
        padding="$3"
        borderTopWidth={1}
        borderTopColor="$borderColor"
        backgroundColor="$background"
        alignItems="center"
        gap="$2"
      >
        <Input
          flex={1}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
          returnKeyType="send"
          multiline
          maxHeight={100}
        />
        <Button
          size="$4"
          circular
          backgroundColor="$blue9"
          pressStyle={{ backgroundColor: '$blue10' }}
          onPress={handleSend}
          disabled={!input.trim()}
          opacity={input.trim() ? 1 : 0.5}
        >
          <Send size={16} color="white" />
        </Button>
      </XStack>
   </YStack>
 </KeyboardAvoidingView>
  );
}
