import * as React from 'react'
import Svg, { Defs, Path, ClipPath, Use, G } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */
export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    id="katman_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 882.72 703.44'
    }}
    viewBox="0 0 882.72 703.44"
    {...props}>
    <Defs>
      <Path id="SVGID_1_" d="M237.72 133.68h408v435.2h-408z" />
    </Defs>
    <ClipPath id="SVGID_2_">
      <Use
        xlinkHref="#SVGID_1_"
        style={{
          overflow: 'visible'
        }}
      />
    </ClipPath>
    <G
      style={{
        clipPath: 'url(#SVGID_2_)'
      }}>
      <Path
        d="M262.29 266.28c-15.66 28.38-24.57 60.88-24.57 95.44s8.91 67.09 24.57 95.47V266.28zM441.72 161.18c-16.55 0-32.61 2-48.02 5.63v31.56c15.26-4.3 31.35-6.66 48.02-6.66 95.5 0 172.93 75.88 172.93 169.5 0 42.16-15.75 80.72-41.74 110.38l-4.93 17.3-10.91 38.29c53.54-36.14 88.68-96.75 88.68-165.41-.03-110.81-91.36-200.59-204.03-200.59z"
        className="st1"
      />
      <Path
        d="M393.7 465.8h159.89c26.48-27.2 42.79-64.03 42.79-104.59 0-83.72-69.23-151.57-154.65-151.57-16.77 0-32.89 2.67-48.02 7.48V465.8z"
        className="st1"
      />
      <Path
        d="M375.2 133.68H258.8l21.98 44.86v345.51l-21.98 44.83h267.13l24.23-84.9H375.2v-350.3z"
        className="st1"
      />
    </G>
  </Svg>
)
