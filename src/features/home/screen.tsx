import {
  XStack,
  YStack,
   Image,
  Text,
  ZStack
} from 'tamagui'
import HeaderNav from 'src/components/headerNav'
import { LinearGradient } from 'tamagui/linear-gradient'


export function HomeScreen() {
  return (
    <YStack
      flex={1}
    >
    <YStack>
    <ZStack position="relative" height={150}>
  <LinearGradient
    start={[0, 0]}
    end={[0, 1]}
    colors={["$blue11", "white"]}
    width="100%"
    height="100%"
    position="absolute"
  />
  
  <HeaderNav />
</ZStack>

</YStack>

    </YStack>
  )
}
