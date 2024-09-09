import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EmailSvg = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={15}
        fill="none"
    >
        <Path
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.333.833h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667v-10c0-.917.75-1.667 1.666-1.667Z"
        />
        <Path
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.333 2.5 10 8.333 1.667 2.5"
        />
    </Svg>
)
export default EmailSvg;
