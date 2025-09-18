import { X } from "@tamagui/lucide-icons";
import React from "react";
import { ScrollView, XStack, Image as TamaguiImage, Button } from "tamagui";

const DemoCrousal: React.FC = () => {
  const Image = [
    {
      url: "https://getepik.in/cdn/shop/files/25-1050_-_Website_Title_card_-_Epik-07.png?v=1755865799",
      id: "2384899"
    },
    {
      url: "https://getepik.in/cdn/shop/files/25-1050_-_Website_Title_card_-_Epik-05.png?v=1755865883",
      id: "2384900"
    },
    {
      url: "https://getepik.in/cdn/shop/files/25-1050_-_Website_Title_card_-_Epik-04.png?v=1755866002",
      id: "2384901"
    },
    {
      url: "https://getepik.in/cdn/shop/files/25-1050_-_Website_Title_card_-_Epik-06.png?v=1755866034",
      id: "2384902"
    },
    {
      url: "https://getepik.in/cdn/shop/files/25-1050_-_Website_Title_card_-_Epik-03.png?v=1755866052",
      id: "2384903"
    },
    {
      url: "https://getepik.in/cdn/shop/files/25-1050---Website-Title-card---Epik-08.png?v=1756098601",
      id: "2384904"
    }
  ];

  const handleImagePress = (item: { url: string; id: string }) => {
    console.log("Image pressed:", item);
    // Add your onPress logic here
    // For example: navigate to detail page, open modal, etc.
  };

  return (
    <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  flexGrow={0} 
  contentContainerStyle={{
    paddingHorizontal: '$3',
    paddingVertical: '$4',
  }}
>
  <XStack gap="$3">
    {Image.map((item) => (
      <Button
        key={item.id}
        unstyled
        padding='$1'
        onPress={() => handleImagePress(item)}
        pressStyle={{ scale: 0.95, opacity: 0.8 }}
        animation="bouncy"
      >
        <TamaguiImage
          source={{ uri: item.url }}
          width={160}
          height={200}
          objectFit="contain"
        />
      </Button>
    ))}
  </XStack>
</ScrollView>

  );
};

export default DemoCrousal;