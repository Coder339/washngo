import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PasswordSvg = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={19}
        fill="none"
    >
        <Path
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.833 8.667H3.167c-.92 0-1.667.746-1.667 1.666v5.834c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666v-5.834c0-.92-.746-1.666-1.667-1.666ZM4.833 8.667V5.333a4.167 4.167 0 0 1 8.334 0v3.334"
        />
    </Svg>
)
export default PasswordSvg;
