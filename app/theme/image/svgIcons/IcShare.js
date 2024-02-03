import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
// import {color} from 'theme';
export const Share = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.7 10.7l6.6-3.4m-6.6 6l6.6 3.4M3 12a3 3 0 106 0 3 3 0 00-6 0zm12-6a3 3 0 106 0 3 3 0 00-6 0zm0 12a3 3 0 106 0 3 3 0 00-6 0z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
