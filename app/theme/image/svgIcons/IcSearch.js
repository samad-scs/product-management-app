import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
// import {color} from 'theme';
export const Search = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19 19l-6-6M1 8a7 7 0 1014 0A7 7 0 001 8z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
