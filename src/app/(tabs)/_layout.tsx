import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme, YStack, View, Button } from 'tamagui';
import { BottomTabs } from '../../components/BottomTabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AdaptivePopOver } from '../../components/adaptivePopover';
import { ChatUI } from '../../components/chatUI'
import { BotMessageSquare } from '@tamagui/lucide-icons';

export default function TabLayout() {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <YStack flex={1} paddingTop={top} backgroundColor="$background" position="relative">
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabs {...props} />}>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="shop" options={{ title: 'Shop' }} />
        <Tabs.Screen name="wishlist" options={{ title: 'Wishlist' }} />
        <Tabs.Screen name="card" options={{ title: 'Card' }} />
      </Tabs>
      
      <View position="absolute" bottom="$15" right="$4" $gtSm={{ bottom: '$10', right: '$8' }}>
        <AdaptivePopOver
          trigger={
            <Button
              size="$5"
              circular
              elevate
              theme="active"
              icon={BotMessageSquare}
              scaleIcon={1.5}
              backgroundColor={theme.color5}
              $gtSm={{scale:1.8}}
            />
          }
        >
          <ChatUI />
        </AdaptivePopOver>
      </View>
    </YStack>
  );
}