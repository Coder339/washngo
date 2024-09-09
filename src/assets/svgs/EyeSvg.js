import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EyeSvg = (props) => (
    <Svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={14}
        fill="none"
    >
        <Path
            stroke="#9B9797"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M6.25 1.345A7.38 7.38 0 0 1 8.5 1c3.136 0 5.271 1.875 6.544 3.528C15.68 5.358 16 5.771 16 7c0 1.23-.319 1.643-.956 2.472C13.77 11.125 11.636 13 8.5 13c-3.136 0-5.271-1.875-6.544-3.528C1.32 8.644 1 8.229 1 7c0-1.23.319-1.643.956-2.472.389-.508.822-.98 1.294-1.412"
        />
        <Path
            stroke="#9B9797"
            strokeWidth={1.5}
            d="M10.75 7a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
    </Svg>
)
export default EyeSvg;
