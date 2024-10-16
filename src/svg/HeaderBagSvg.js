import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HeaderBagSvg = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M20.774 20.729 19.498 6.683A.752.752 0 0 0 18.749 6H16.5V4.5a4.475 4.475 0 0 0-1.314-3.186A4.475 4.475 0 0 0 12 0a4.505 4.505 0 0 0-4.5 4.5V6H5.25a.749.749 0 0 0-.747.683L3.226 20.729a3.007 3.007 0 0 0 .772 2.294A3.005 3.005 0 0 0 6.214 24h11.572c.842 0 1.649-.355 2.216-.977a3.013 3.013 0 0 0 .772-2.294ZM9 4.5c0-1.655 1.346-3 3-3a2.988 2.988 0 0 1 3 3V6H9V4.5Zm9.894 17.512a1.489 1.489 0 0 1-1.108.488H6.214c-.426 0-.82-.174-1.107-.489a1.48 1.48 0 0 1-.386-1.148L5.935 7.5h1.564v2.25a.75.75 0 0 0 1.5 0V7.5h6v2.25a.75.75 0 0 0 1.5 0V7.5h1.565l1.215 13.365c.039.425-.098.833-.386 1.148Z"
      fill="#626262"
    />
  </Svg>
);

export default HeaderBagSvg;
