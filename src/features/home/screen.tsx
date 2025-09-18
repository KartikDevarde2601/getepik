import React, { useState } from 'react'
import {
  H1,
  YStack,
  View,
  ScrollView,
  XStack,
  H4
} from 'tamagui'
import HeaderNavWithCollection from 'src/components/headerNavWithCollection';
import DemoCrousal from 'src/components/demoCrousal';
import ProductCard from 'src/components/productCard';


export function HomeScreen() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <YStack
      flex={1}
>
      <HeaderNavWithCollection />
      <ScrollView gap='$2'>
    <DemoCrousal />
    <View gap='$4' paddingHorizontal='$4'>
   <H4>Top Deals at Epik</H4>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <XStack gap='$4'>
          <ProductCard/>
            <ProductCard/>
              <ProductCard/>
                <ProductCard/>
        </XStack>
      
      </ScrollView>
    </View>
    
      </ScrollView>
      
      
    </YStack>
  )
}
