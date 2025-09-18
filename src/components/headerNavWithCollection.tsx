import React from "react";
import {
  XStack,
  YStack,
   View,
  Text,
  ZStack
} from 'tamagui'
import HeaderNav from 'src/components/headerNav'
import { LinearGradient } from 'tamagui/linear-gradient'
import SearchInput from "./SearchInput";
import CollectionTab from "./collectionTab";

import { useState } from "react";


const HeaderNavWithCollection:React.FC = () => {
     const [searchValue, setSearchValue] = useState('');
    return (
     <YStack>
    <ZStack position="relative" height={200}>
  <LinearGradient
    start={[0, 0]}
    end={[0, 1]}
    colors={["$blue11", "white"]}
    width="100%"
    height="100%"
    position="absolute"
  />
  
  <HeaderNav />
   <View top={60} paddingHorizontal={20}>
    <SearchInput
        placeholder="Search here..."
        value={searchValue}
        onChangeText={setSearchValue}
      />
   </View>
   <View top={100} paddingVertical='$4' >
  <CollectionTab/>
   </View>
    
</ZStack>
</YStack>
    )
}

export default HeaderNavWithCollection;