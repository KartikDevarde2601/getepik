import { 
  View, 
  ScrollView, 
  Text, 
  XStack, 
  YStack,
  createStyledContext, 
  styled, 
  useTheme, 
  withStaticProperties,
  type GetProps, 
  type SizeTokens 
} from 'tamagui'
import { 
  Home,
  Smartphone,
  Heart,
  ChefHat,
  User,
  Plane,
  Shield,
  Wrench,
  LayoutGrid,
  Laptop
} from '@tamagui/lucide-icons'
import React,{useState} from 'react';
import { Button } from './TabBotton';


const CollectionTab:React.FC = () => {
const [activeTab, setActiveTab] = useState('all')

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId)
  }

const tabData = [
  { id: 'all', label: 'All', icon: LayoutGrid },
  { id: 'gadgets', label: 'Gadgets', icon: Smartphone },
  { id: 'healthtech', label: 'Health Tech', icon: Heart },
  { id: 'kitchen', label: 'Kitchen', icon: ChefHat },
  { id: 'personal', label: 'Personal Care', icon: User },
  { id: 'travel', label: 'Travel', icon: Plane },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'home', label: 'Home Improvement', icon: Wrench },
  { id: 'electronics', label: 'Electronics', icon: Laptop },
  { id: 'living', label: 'Living', icon: Home }]


  return (
  <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
        style={{ flexGrow: 0 }}
      >
        <XStack gap="$2" paddingVertical="$2">
          {tabData.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <Button
                key={tab.id}
                focused={isActive}
                size="$3"
                onPress={() => handleTabPress(tab.id)}
                pressStyle={{
                  scale: 0.95,
                }}
              >
                <Button.Icon focused={isActive}>
                  <IconComponent />
                </Button.Icon>
                <Button.Text focused={isActive}>
                  {tab.label}
                </Button.Text>
              </Button>
            )
          })}
        </XStack>
      </ScrollView>
  )
}


export default CollectionTab;