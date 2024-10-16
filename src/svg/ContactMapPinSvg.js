import * as React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

const ContactMapPinSvg = () => (
  <Svg width={30} height={30} fill="none">
    <G
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M20.25 13.833c0 4.084-5.25 7.584-5.25 7.584s-5.25-3.5-5.25-7.584a5.25 5.25 0 1 1 10.5 0Z" />
      <Path d="M15 15.583a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
    </G>
    <Rect
      x={0.5}
      y={0.5}
      width={29}
      height={29}
      rx={14.5}
      stroke="#DBE3F5"
      strokeOpacity={0.3}
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(8 8)" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ContactMapPinSvg;
