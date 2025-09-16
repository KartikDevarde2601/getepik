import { getSize, getSpace } from '@tamagui/get-token'
import type { GetProps, SizeTokens } from 'tamagui'
import { View, Text, createStyledContext, styled, useTheme, withStaticProperties } from 'tamagui'
import type { ReactNode } from 'react'
import { cloneElement, isValidElement, useContext } from 'react'

export const TabButtonContext = createStyledContext({
  size: '$true' as SizeTokens,
})

export const TabButtonFrame = styled(View, {
  name: 'TabButton',
  context: TabButtonContext,
  backgroundColor: 'transparent',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  paddingVertical: '$2',
  paddingHorizontal: '$3',

  animation: 'tabBounce',
  animateOnly: ['scale'], // Only animate the scale

  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          gap: tokens.space[name].val * 0.2,
          paddingHorizontal: getSpace(name, {
            shift: -1,
          }),
        }
      },
    },

    focused: {
      true: {},
      false: {},
    },
  } as const,

  defaultVariants: {
    size: '$4',
    focused: false,
  },
})

export const TabButtonText = styled(Text, {
  name: 'TabButtonText',
  context: TabButtonContext,
  color: '$color',
  userSelect: 'none',
  textAlign: 'center',
  fontSize: '$1',

  animation: 'tabBounce',
  animateOnly: ['scale', 'color'],

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },

    focused: {
      true: {
        scale: 1.05, // Text slightly bigger when focused
        color: '$blue11',
        fontWeight: '700',
      },
      false: {
        scale: 1, // Default size
        color: '$color',
        fontWeight: '400',
      },
    },
  } as const,
})

const ButtonIcon = (props: { children: ReactNode; focused?: boolean }) => {
  const { size } = useContext(TabButtonContext)

  const iconSize = getSize(size, {
    shift: -2,
  })

  const theme = useTheme()

  if (!isValidElement(props.children)) {
    return null
  }

  return (
    <View scale={props.focused ? 1.2 : 1} animateOnly={['scale']}>
      {cloneElement(props.children, {
        size: iconSize.val,
        color: props.focused
          ? theme.blue11?.get()
          : theme.color9?.get()
      } as any)}
    </View>
  )
}

export const Button = withStaticProperties(TabButtonFrame, {
  Props: TabButtonContext.Provider,
  Text: TabButtonText,
  Icon: ButtonIcon,
})

export type ButtonProps = GetProps<typeof TabButtonFrame> & {
  focused?: boolean
  onPress?: () => void
  onLongPress?: () => void
}
