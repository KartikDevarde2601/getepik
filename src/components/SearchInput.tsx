import React, { useState } from 'react';
import {
  XStack,
  Input,
  YStack,
  Text,
} from 'tamagui';
import { Search } from '@tamagui/lucide-icons';

// Basic search input component
const SearchInput = ({ 
  placeholder = "Search...", 
  onChangeText,
  value,
  ...props 
}) => {
  const [text, setText] = useState(value || '');

  const handleChange = (newText) => {
    setText(newText);
    onChangeText?.(newText);
  };

  return (
    <XStack
      backgroundColor="white"
   
      borderRadius="$4"
      paddingHorizontal="$3"
      paddingVertical="$1"
      alignItems="center"
      gap="$2"
      {...props}
    >
      {/* Search Icon */}
      <Search size={25}  />

      {/* Input Field */}
      <Input
        flex={1}
        borderWidth={0}
        backgroundColor="transparent"
        fontSize="$4"
        placeholder={placeholder}

        value={text}
        onChangeText={handleChange}
      />
    </XStack>
  );
};

export default SearchInput;