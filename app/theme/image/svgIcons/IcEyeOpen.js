import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const EyeOpen = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 12.325a2 2 0 104 0 2 2 0 00-4 0z"
        stroke={props.stroke ?? color.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12.325c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6z"
        stroke={props.stroke ?? color.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
