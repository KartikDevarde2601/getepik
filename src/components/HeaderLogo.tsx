import {
  styled,
  XStack,
  Text,
  createStyledContext,
  SizeTokens,
  withStaticProperties,
  ColorTokens,
  YStack,
  getTokens
} from "tamagui"
import { getSize, getSpace } from "@tamagui/get-token"
import { useContext } from "react"
import { SvgProps } from "react-native-svg"

// -----------------------------
// Context
// -----------------------------
export const HeaderContext = createStyledContext({
  size: "$4" as SizeTokens,
  color: "$color" as ColorTokens,
})

// -----------------------------
// Frame
// -----------------------------
const HeaderFrame = styled(XStack, {
  name: "Header",
  context: HeaderContext,
  alignItems: "center",

  variants: {
    size: {
      "...size": (name, { tokens }) => {
        return {
          gap: tokens.space[name].val * 0.3,
          paddingHorizontal: getSpace(name, {
            shift: 0,
          }),
          paddingVertical: getSpace(name, {
            shift: -1,
          }),
          minHeight: tokens.size[name].val,
        }
      },
    },
  } as const,
})

// -----------------------------
// Logo (Svg only)
// -----------------------------
type LogoProps = SvgProps & {
  Icon: React.ComponentType<SvgProps>
}

const Logo = ({ Icon, ...rest }: LogoProps) => {
  const { size} = useContext(HeaderContext.context)
    const smaller = getSize(size, { shift: -2 })
   const tokens = getTokens()

  return (
    <Icon
      width={smaller.val }
      height={smaller.val }
      {...rest}
    />
  )
}

// -----------------------------
// Text Frame
// -----------------------------
const TextFrame = styled(YStack, {
  name: "HeaderTextFrame",
  context: HeaderContext,
  gap: "$1",
  alignItems: "flex-start",
})

// -----------------------------
// Feature Text
// -----------------------------
const FeatureText = styled(Text, {
  name: "FeatureText",
  context: HeaderContext,
  userSelect: "none",

   variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name].val * 0.8,
      } ),
    },
  } as const,
})

// -----------------------------
// Export Header with statics
// -----------------------------
export const Header = withStaticProperties(HeaderFrame, {
  Props: HeaderContext.Provider,
  Logo,
  Text: FeatureText,
  TextGroup: TextFrame,
})
