import React from 'react';
import type { ReactNode } from 'react';
import { 
  Adapt, 
  Popover, 
  Sheet, 
  Separator, 
  useMedia
} from 'tamagui';
import type { PopoverProps } from 'tamagui';
import { KeyboardAvoidingView, Platform } from 'react-native';

// Enhanced AdaptivePopOver with keyboard handling and responsive sizing
export const AdaptivePopOver = ({
  children,
  trigger,
  ...props
}: PopoverProps & {
  children: ReactNode;
  trigger: ReactNode;
}) => {
  const media = useMedia();

  return (
    <Popover size="$5" allowFlip stayInFrame {...props}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>

      <Adapt when="sm">
        <Popover.Sheet modal dismissOnSnapToBottom >
          <Popover.Sheet.Frame 
            padding="$0" 
            backgroundColor="#ffff" 
            borderRadius="$8"
            elevation={10}
            flex={1}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{ flex: 1 }}
            >
              <Popover.Sheet.ScrollView contentContainerStyle={{ flex: 1 }}>
                <Adapt.Contents />
              </Popover.Sheet.ScrollView>
            </KeyboardAvoidingView>
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation="quick"
        padding="$0"
        // Responsive width and height for larger screens
        width={media.gtSm ? 400 : 350}
        height={media.gtSm ? 600 : 500}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
        
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <Separator 
            marginVertical="$2" 
            width={50} 
            alignSelf="center" 
            borderWidth="$1" 
            borderRadius="$4" 
            borderColor="black" 
          />
          {children}
        </KeyboardAvoidingView>
      </Popover.Content>
    </Popover>
  );
};