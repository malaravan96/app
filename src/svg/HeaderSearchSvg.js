import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HeaderSearchSvg = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.333 2.5a4.833 4.833 0 1 0 0 9.667 4.833 4.833 0 0 0 0-9.667ZM1.5 7.333a5.833 5.833 0 1 1 11.667 0 5.833 5.833 0 0 1-11.667 0Z"
      fill="#626262"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.629 10.629c.26-.26.682-.26.942 0l2.9 2.9a.667.667 0 1 1-.942.942l-2.9-2.9a.667.667 0 0 1 0-.942Z"
      fill="#626262"
    />
  </Svg>
);

export default HeaderSearchSvg;
