import React, { useState } from 'react';
import { 
  YStack, 
  XStack, 
  Input,
  ScrollView,
  Text,
  Avatar,
  Button
} from 'tamagui';
import { Send, Bot } from '@tamagui/lucide-icons';
import {BotMessageSquare,History} from '@tamagui/lucide-icons';
import { useTheme } from 'tamagui';
// Message interface
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// ChatUI Component
export const ChatUI = () => {
  const theme = useTheme();
  const [messages, setMessages] = React.useState<Message[]>([]);

  const [inputText, setInputText] = React.useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText.trim(),
        isBot: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, newMessage]);
      const currentInput = inputText.trim();
      setInputText('');

      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: `I received your message: "${currentInput}". How can I assist you further?`,
          isBot: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
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

      {/* Messages Area */}
      <ScrollView
        flex={1}
        padding="$2"
        showsVerticalScrollIndicator={false}
      >
        <YStack gap="$2">
          {messages.map((message) => (
            <XStack
              key={message.id}
              justifyContent={message.isBot ? 'flex-start' : 'flex-end'}
              marginHorizontal="$2"
            >
              <YStack
                maxWidth="80%"
                backgroundColor={!message.isBot ? '$blue9' :'#f9f9f9' } 
                padding="$2"
                borderRadius="$4"
                borderTopLeftRadius={message.isBot ? '$1' : '$4'}
                borderTopRightRadius={message.isBot ? '$4' : '$1'}
              >
                <Text
                  color={message.isBot ? '$color12' : 'white'}
                  fontSize="$3"
                  lineHeight="$1"
                >
                  {message.text}
                </Text>
              </YStack>
            </XStack>
          ))}
        </YStack>
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
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
          multiline
          maxHeight={100}
        />
        <Button
          size="$4"
          circular
          backgroundColor="$blue9"
          pressStyle={{ backgroundColor: '$blue10' }}
          onPress={sendMessage}
          disabled={!inputText.trim()}
          opacity={inputText.trim() ? 1 : 0.5}
        >
          <Send size={16} color="white" />
        </Button>
      </XStack>
    </YStack>
  );
};