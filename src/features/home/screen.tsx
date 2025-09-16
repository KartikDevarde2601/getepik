import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack
} from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'

export function HomeScreen() {


  return (
    <YStack flex={1} justifyContent="center" alignItems="center" gap="$8" padding="$4" backgroundColor="$background">      
      <YStack gap="$4">
        <H1 textAlign="center" color="$color12">
          Welcome to Tamagui.
        </H1>
        <Paragraph color="$color10" textAlign="center">
          Here's a basic starter to show navigating from one screen to another.
        </Paragraph>
        <Separator />
        <Paragraph textAlign="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
      </YStack>
    </YStack>
  )
}

