import * as React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

const ContactPhoneSvg = () => (
  <Svg width={30} height={30} fill="none">
    <G clipPath="url(#a)">
      <Path
        d="M15.78 10.917a2.917 2.917 0 0 1 2.303 2.304l-2.304-2.304Zm0-2.334a5.25 5.25 0 0 1 4.637 4.632l-4.638-4.632Zm4.053 9.287v1.75a1.166 1.166 0 0 1-1.271 1.167 11.544 11.544 0 0 1-5.035-1.791 11.375 11.375 0 0 1-3.5-3.5 11.544 11.544 0 0 1-1.79-5.058 1.167 1.167 0 0 1 1.16-1.271h1.75a1.167 1.167 0 0 1 1.167 1.003c.074.56.211 1.11.409 1.64a1.166 1.166 0 0 1-.263 1.23l-.74.74a9.333 9.333 0 0 0 3.5 3.5l.74-.74a1.166 1.166 0 0 1 1.23-.262c.53.197 1.08.334 1.64.408a1.166 1.166 0 0 1 1.003 1.184Z"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        <Path fill="#fff" transform="translate(7 8)" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ContactPhoneSvg;
