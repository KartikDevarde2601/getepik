import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const LightingSvg = (props: SvgProps) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      d="M386.415 193.208h-98.934L359.434 0H161.566l-35.981 280.151h80.943L170.557 512z"
      fill={props.color || "#000"}
    />
  </Svg>
)
export default LightingSvg
