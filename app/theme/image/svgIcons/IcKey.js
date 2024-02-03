import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
// import {color} from 'theme';
export const Key = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.5 9.5l-4 4L8 15m2-2l-1.5-1.5M10 8a2 2 0 104 0 2 2 0 00-4 0zm9 2a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
