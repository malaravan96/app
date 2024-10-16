import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const RepeatOrderSvg = () => (
  <Svg width={102} height={21} fill="none">
    <G
      clipPath="url(#a)"
      stroke="#111"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.333 3.667 14 6.333 11.333 9" />
      <Path d="M2 10.333V9a2.667 2.667 0 0 1 2.667-2.667H14M4.667 18.333 2 15.667 4.667 13" />
      <Path d="M14 11.667V13a2.667 2.667 0 0 1-2.667 2.667H2" />
    </G>
    <Path
      d="M23.092 16v-5.068c0-.327-.01-.653-.028-.98a8.724 8.724 0 0 0-.084-.994h1.078l.154 1.736-.154-.042c.13-.616.41-1.078.84-1.386a2.449 2.449 0 0 1 1.806-.448c.112.01.215.028.308.056l-.028 1.036a2.255 2.255 0 0 0-.742-.112c-.485 0-.877.107-1.176.322-.29.215-.504.49-.644.826-.13.327-.196.672-.196 1.036V16h-1.134Zm10.703-.84c-.308.29-.704.518-1.19.686a4.385 4.385 0 0 1-1.47.252c-.728 0-1.358-.145-1.89-.434a3.015 3.015 0 0 1-1.218-1.246c-.28-.55-.42-1.204-.42-1.96 0-.728.14-1.367.42-1.918.28-.55.668-.98 1.162-1.288.505-.308 1.083-.462 1.736-.462.626 0 1.162.14 1.61.42.449.27.79.663 1.023 1.176.242.513.364 1.13.364 1.848v.21h-5.32v-.742h4.676l-.364.518c.018-.821-.145-1.451-.49-1.89-.337-.439-.831-.658-1.485-.658-.68 0-1.218.243-1.61.728-.382.476-.573 1.139-.573 1.988 0 .915.2 1.605.602 2.072.41.467 1.008.7 1.791.7.411 0 .803-.065 1.176-.196a3.81 3.81 0 0 0 1.092-.63l.378.826Zm1.848 3.864v-8.092c0-.327-.01-.653-.028-.98a8.77 8.77 0 0 0-.084-.994h1.078l.126 1.456-.112.21c.158-.588.462-1.04.91-1.358.448-.317.99-.476 1.624-.476.616 0 1.157.154 1.624.462.476.308.844.737 1.106 1.288.27.55.406 1.195.406 1.932 0 .737-.136 1.381-.406 1.932a3.01 3.01 0 0 1-1.092 1.26c-.467.29-1.013.434-1.638.434-.635 0-1.176-.159-1.624-.476-.448-.317-.752-.77-.91-1.358l.154-.14v4.9h-1.134Zm3.304-3.864c.681 0 1.213-.233 1.596-.7.382-.467.574-1.13.574-1.988 0-.859-.192-1.526-.574-2.002-.383-.485-.915-.728-1.596-.728-.7 0-1.237.233-1.61.7-.374.467-.56 1.134-.56 2.002 0 .868.186 1.54.56 2.016.373.467.91.7 1.61.7Zm10.858 0c-.308.29-.704.518-1.19.686a4.385 4.385 0 0 1-1.47.252c-.728 0-1.358-.145-1.89-.434a3.014 3.014 0 0 1-1.218-1.246c-.28-.55-.42-1.204-.42-1.96 0-.728.14-1.367.42-1.918.28-.55.668-.98 1.162-1.288.504-.308 1.083-.462 1.736-.462.626 0 1.162.14 1.61.42.448.27.789.663 1.022 1.176.243.513.364 1.13.364 1.848v.21h-5.32v-.742h4.676l-.364.518c.019-.821-.144-1.451-.49-1.89-.336-.439-.83-.658-1.484-.658-.681 0-1.218.243-1.61.728-.382.476-.574 1.139-.574 1.988 0 .915.201 1.605.602 2.072.411.467 1.008.7 1.792.7.411 0 .803-.065 1.176-.196a3.81 3.81 0 0 0 1.092-.63l.378.826Zm4.55.938c-.626 0-1.176-.145-1.652-.434a3.01 3.01 0 0 1-1.093-1.26c-.252-.55-.377-1.195-.377-1.932 0-.737.13-1.381.392-1.932a3.09 3.09 0 0 1 1.092-1.288c.476-.308 1.022-.462 1.638-.462.644 0 1.19.159 1.638.476.447.317.75.77.91 1.358l-.169.112V8.958h1.12V16h-1.12v-1.82l.169.084c-.16.588-.462 1.04-.91 1.358-.449.317-.995.476-1.639.476Zm.224-.938c.69 0 1.222-.233 1.596-.7.373-.476.56-1.148.56-2.016 0-.868-.192-1.535-.575-2.002-.373-.467-.9-.7-1.581-.7-.691 0-1.233.243-1.624.728-.383.476-.575 1.143-.575 2.002 0 .859.192 1.521.575 1.988.392.467.933.7 1.623.7Zm4.474-5.306v-.896h4.522v.896h-4.522Zm4.494 5.138v.966c-.159.047-.317.08-.476.098a2.75 2.75 0 0 1-.504.042c-.653 0-1.176-.187-1.568-.56-.383-.373-.574-.933-.574-1.68V7.152l1.134-.406v6.958c0 .373.051.663.154.868.112.205.261.35.448.434.187.075.397.112.63.112.14 0 .266-.01.378-.028.112-.019.238-.051.378-.098Zm7.957 1.106c-.672 0-1.26-.15-1.764-.448a3.098 3.098 0 0 1-1.162-1.26c-.27-.55-.406-1.2-.406-1.946 0-.737.135-1.381.406-1.932.28-.55.667-.975 1.162-1.274.504-.299 1.092-.448 1.764-.448.672 0 1.255.15 1.75.448a2.96 2.96 0 0 1 1.162 1.274c.28.55.42 1.195.42 1.932 0 .747-.14 1.395-.42 1.946-.27.541-.658.961-1.162 1.26-.495.299-1.078.448-1.75.448Zm0-.938c.69 0 1.223-.229 1.596-.686.383-.467.574-1.143.574-2.03 0-.868-.191-1.535-.574-2.002-.383-.467-.915-.7-1.596-.7s-1.218.233-1.61.7c-.383.467-.574 1.134-.574 2.002 0 .887.187 1.563.56 2.03.383.457.924.686 1.624.686Zm5.1.84v-5.068c0-.327-.01-.653-.028-.98a8.724 8.724 0 0 0-.084-.994h1.078l.154 1.736-.154-.042c.13-.616.41-1.078.84-1.386a2.449 2.449 0 0 1 1.806-.448c.112.01.214.028.308.056l-.028 1.036a2.255 2.255 0 0 0-.742-.112c-.486 0-.878.107-1.176.322-.29.215-.504.49-.644.826-.13.327-.196.672-.196 1.036V16h-1.134Zm11.137 0h-1.12v-1.89l.168.154c-.158.588-.462 1.04-.91 1.358-.448.317-.994.476-1.638.476-.616 0-1.162-.15-1.638-.448a3.088 3.088 0 0 1-1.092-1.288c-.261-.56-.392-1.209-.392-1.946 0-.737.126-1.377.378-1.918a3.007 3.007 0 0 1 1.092-1.26c.476-.299 1.027-.448 1.652-.448.644 0 1.19.163 1.638.49.448.317.752.765.91 1.344l-.182.14V5.696h1.134V16Zm-3.276-.84c.682 0 1.209-.233 1.582-.7.383-.476.574-1.148.574-2.016 0-.859-.186-1.521-.56-1.988-.373-.476-.905-.714-1.596-.714-.69 0-1.232.233-1.624.7-.382.467-.574 1.125-.574 1.974 0 .868.192 1.545.574 2.03.392.476.934.714 1.624.714Zm11.237 0c-.308.29-.705.518-1.19.686a4.385 4.385 0 0 1-1.47.252c-.728 0-1.358-.145-1.89-.434a3.014 3.014 0 0 1-1.218-1.246c-.28-.55-.42-1.204-.42-1.96 0-.728.14-1.367.42-1.918.28-.55.667-.98 1.162-1.288.504-.308 1.082-.462 1.736-.462.625 0 1.162.14 1.61.42.448.27.789.663 1.022 1.176.243.513.364 1.13.364 1.848v.21h-5.32v-.742h4.676l-.364.518c.019-.821-.145-1.451-.49-1.89-.336-.439-.83-.658-1.484-.658-.681 0-1.218.243-1.61.728-.383.476-.574 1.139-.574 1.988 0 .915.2 1.605.602 2.072.41.467 1.008.7 1.792.7.41 0 .803-.065 1.176-.196a3.81 3.81 0 0 0 1.092-.63l.378.826Zm1.847.84v-5.068c0-.327-.01-.653-.028-.98a8.724 8.724 0 0 0-.084-.994h1.078l.154 1.736-.154-.042c.13-.616.41-1.078.84-1.386a2.45 2.45 0 0 1 1.806-.448c.112.01.215.028.308.056l-.028 1.036a2.256 2.256 0 0 0-.742-.112c-.485 0-.877.107-1.176.322-.29.215-.504.49-.644.826-.13.327-.196.672-.196 1.036V16h-1.134Z"
      fill="#111"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 3)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RepeatOrderSvg;
