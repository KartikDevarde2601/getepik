import type React from 'react'
import { YStack, H5, H3 } from 'tamagui'

type Props = {}
export const CardScreen: React.FC<Props> = () => {
  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <H3 text="center" color="$color12">
        Card Screen
      </H3>
      <H5>Screen are under Develpoment</H5>
    </YStack>
  )
}
