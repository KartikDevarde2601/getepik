import { Tabs } from 'expo-router'
import { useTheme } from 'tamagui'
import { BottomTabs } from '../../components/BottomTabs'

export default function TabLayout() {
  const theme = useTheme()
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabs {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="shop" options={{ title: 'Shop' }} />
      <Tabs.Screen name="wishlist" options={{ title: 'Wishlist' }} />
      <Tabs.Screen name="card" options={{ title: 'Card' }} />
    </Tabs>
  )
}
