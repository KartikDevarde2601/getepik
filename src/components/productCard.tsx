import { Card, YStack, XStack, Text, Button, Image } from 'tamagui';
import { Heart, ChevronRight } from '@tamagui/lucide-icons';
import React = require('react');

interface ProductCardProps {
  imageUrl: string;
  saveAmount: number;
  tags: string[];
  title: string;
  discountPercentage: number;
  price: number;
  mrp: number;
}

const ProductCard = ({
  imageUrl = "https://getepik.in/cdn/shop/files/curapod-by-litemed.webp?v=1744618318",
  saveAmount = 1350,
  tags = ['Neck', 'Shoulder', 'Ankle & Foot', 'L...'],
  title = 'Curapod by Litemed | Non Invasive Pain Manageme...',
  discountPercentage = 15,
  price = 7649,
  mrp = 8999,
}: Partial<ProductCardProps> = {}) => {
  return (
    <Card
      elevate
      width="100%"
      maxWidth={160} // reduced ~55% from original
      borderRadius="$2"
      backgroundColor="white"
      overflow="hidden"
      paddingBottom="$2"
      pressStyle={{ scale: 0.99 }}
      animation="bouncy"
    >
      <YStack>
        {/* Image Section */}
        <YStack position="relative" backgroundColor="#F4F8FF">
          <Image
            source={{ uri: imageUrl }}
            resizeMode="contain"
            width="100%"
            aspectRatio={1}
          />

          {/* Save Badge */}
          <XStack
            position="absolute"
            top="$0"
            left="$0"
            backgroundColor="#D32F2F"
            borderBottomRightRadius="$3"
            borderTopLeftRadius="$2"
            paddingVertical="$0.75"
            paddingHorizontal="$1.5"
            elevation="$0.25"
          >
            <Text color="white" fontSize="$1" fontWeight="bold">
              Save ₹{saveAmount.toLocaleString('en-IN')}
            </Text>
          </XStack>

          {/* Wishlist Button */}
          <Button
            position="absolute"
            top="$1.5"
            right="$1.5"
            circular
            size="$2"
            icon={<Heart size={12} color="#666" />}
            backgroundColor="rgba(255, 255, 255, 0.9)"
            pressStyle={{ backgroundColor: '$background' }}
            borderColor="$borderColor"
            borderWidth={1}
            elevation="$0.25"
          />

          {/* Add Button */}
          <Button
            position="absolute"
            bottom="$1.5"
            right="$1.5"
            backgroundColor="white"
            color="#388E3C"
            borderColor="#388E3C"
            borderWidth={1}
            pressStyle={{ backgroundColor: '#F1F8E9' }}
            size="$2"
            fontWeight="bold"
            borderRadius="$4"
            elevation="$0.25"
          >
            ADD
          </Button>
        </YStack>

        <YStack padding="$2" gap="$2">

          {/* Title */}
          <Text fontSize="$2" fontWeight="700" color="$color" numberOfLines={2} lineHeight={14}>
            {title}
          </Text>

          {/* Pricing Section */}
          <XStack alignItems="flex-end" justifyContent="space-between" space="$1" flexWrap="wrap">
            <Text color="#D32F2F" fontWeight="bold" fontSize="$2">
              {discountPercentage}% off
            </Text>
            <Text fontSize="$4" fontWeight="bold" color="$color" lineHeight={16}>
              ₹{price.toLocaleString('en-IN')}
            </Text>
            <Text
              fontSize="$2"
              color="gray"
              textDecorationLine="line-through"
              paddingBottom="$0.25"
            >
              MRP ₹{mrp.toLocaleString('en-IN')}
            </Text>
          </XStack>

          {/* Demo Button */}
          <Button
            backgroundColor="#FEFBEA"
            pressStyle={{ backgroundColor: '#FFF5C0' }}
            justifyContent="space-between"
            iconAfter={<ChevronRight size={12} color="#A78734" />}
            borderColor="#FDE68A"
            borderWidth={1}
            paddingHorizontal="$2"
            size="$2"
          >
            <Text color="#A78734" fontWeight="600" fontSize="$2">
              Demo
            </Text>
          </Button>
        </YStack>
      </YStack>
    </Card>
  );
};

export default ProductCard;
