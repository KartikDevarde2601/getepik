import type React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Separator, YStack, useMedia, AnimatePresence } from 'tamagui'
import { Home, ShoppingCart, Grip, Heart } from '@tamagui/lucide-icons'
import type { IconProps } from '@tamagui/helpers-icon'
import type { Tabs } from 'expo-router'
import type { ComponentType } from 'react'
import { Button } from './TabBotton'

type ExpoTabBarProps = Parameters<NonNullable<React.ComponentProps<typeof Tabs>['tabBar']>>[0]

type IconComponent = (propsIn: IconProps) => React.JSX.Element

export function BottomTabs({ state, descriptors, navigation }: ExpoTabBarProps) {
  const media = useMedia()
  const { bottom } = useSafeAreaInsets()

  if (media.md) return null

  const icons: Record<string, IconComponent> = {
    index: Home,
    shop: Grip,
    wishlist: Heart,
    card: ShoppingCart,
  }

  return (
    <YStack backgroundColor="$background" paddingBottom={bottom}>
      <Separator alignItems="stretch" />
      <View
        flexDirection="row"
        paddingHorizontal="$4"
        paddingTop="$2"
        alignItems="center"
        justifyContent="space-between"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const isFocused = state.index === index
          const Icon = icons[route.name]

          if (!Icon) {
            console.warn(`No icon found for route: ${route.name}`)
            return null
          }

          let label: React.ReactNode
          if (typeof options.tabBarLabel === 'function') {
            label = options.tabBarLabel({
              focused: isFocused,
              color: isFocused ? '$accent7' : '$color8',
              position: 'below-icon',
              children: route.name,
            })
          } else {
            label = options.tabBarLabel ?? options.title ?? route.name
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <Button
              key={route.key}
              size="$3"
              focused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              flexDirection="column"
              minWidth="$6"
            >
              <Button.Icon focused={isFocused}>
                <Icon />
              </Button.Icon>
              <Button.Text focused={isFocused} fontSize="$1" textAlign="center">
                {label}
              </Button.Text>
            </Button>
          )
        })}
      </View>
    </YStack>
  )
}
