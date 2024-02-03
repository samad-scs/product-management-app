import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
// import {color} from 'theme';
export const Phone = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 1h4l2 5-2.5 1.5a11 11 0 005 5L13 10l5 2v4a2 2 0 01-2 2A16 16 0 011 3a2 2 0 012-2z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
