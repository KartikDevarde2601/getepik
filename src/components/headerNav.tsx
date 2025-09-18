import React from "react";
import {
  XStack,
  YStack,
  Image,
  Text,
  ZStack
} from 'tamagui'
import { Header } from 'src/components/HeaderLogo'
import  LightingSvg  from 'src/components/Icons/lighting'

import {UserCircle2} from '@tamagui/lucide-icons'

type HeaderNavProps = {

}

const HeaderNav:React.FC<HeaderNavProps> = () => {
    return (
        <XStack padding="$2" alignItems="center">
          {/* Left column: Header */}
          <XStack flex={1}>
            <Header size="$2">
              <Header.Logo Icon={LightingSvg} color="yellow" />
              <Header.TextGroup>
                <Header.Text color="yellow">Home Demo in</Header.Text>
                <Header.Text color="yellow">30 minutes</Header.Text>
              </Header.TextGroup>
            </Header>
          </XStack>
        
          {/* Center column: Logo */}
          <XStack flex={1} alignItems="center" justifyContent="center">
            <Image
              source={{
                uri: 'https://getepik.in/cdn/shop/files/without-bg-logo_1.png?v=1741423099&width=300',
              }}
              width={100}
              height={50}
              resizeMode="contain"
            />
          </XStack>
        
          {/* Right column: User icon */}
          <XStack flex={1} alignItems="flex-start" justifyContent="flex-end">
            <UserCircle2 color="white" size={32} />
          </XStack>
        </XStack>
        
    )
}

export default HeaderNav;