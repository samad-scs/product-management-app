import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
// import {color} from 'theme';
export const Mail = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 3a2 2 0 012-2h14a2 2 0 012 2M1 3v10a2 2 0 002 2h14a2 2 0 002-2V3M1 3l9 6 9-6"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
