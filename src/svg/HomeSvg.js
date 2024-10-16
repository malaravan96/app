import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

const HomeSvg = ({ bgColor = "#DBE3F5", iconColor = "#111" }) => (
  <Svg width={57} height={40} fill="none">
    <Circle cx={28} cy={20} r={20} fill={bgColor} />
    <G clipPath="url(#a)">
      <Path
        d="m39.4 18.392-.002-.002-9.79-9.79a2.194 2.194 0 0 0-1.562-.647c-.59 0-1.145.23-1.563.647l-9.785 9.785-.01.01a2.212 2.212 0 0 0 .005 3.12 2.197 2.197 0 0 0 1.534.648h.39v7.204a2.589 2.589 0 0 0 2.586 2.586h3.83a.703.703 0 0 0 .703-.703v-5.648c0-.651.53-1.18 1.18-1.18h2.26c.65 0 1.179.529 1.179 1.18v5.648c0 .388.315.703.703.703h3.83a2.589 2.589 0 0 0 2.586-2.586v-7.204h.362a2.213 2.213 0 0 0 1.564-3.77Zm-.996 2.13a.798.798 0 0 1-.568.235h-1.065a.703.703 0 0 0-.703.703v7.907c0 .65-.53 1.18-1.18 1.18h-3.127v-4.945a2.589 2.589 0 0 0-2.586-2.586h-2.259a2.59 2.59 0 0 0-2.586 2.586v4.945h-3.127c-.65 0-1.18-.53-1.18-1.18V21.46a.703.703 0 0 0-.703-.703h-1.047a.797.797 0 0 1-.586-.236.804.804 0 0 1 0-1.136h.001l9.79-9.79a.797.797 0 0 1 .568-.236c.214 0 .416.084.567.236l9.788 9.787.005.004a.805.805 0 0 1-.002 1.135Z"
        fill={iconColor}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(16 8)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HomeSvg;
