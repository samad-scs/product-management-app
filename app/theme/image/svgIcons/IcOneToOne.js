import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const OneToOne = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 21.325v-2a4 4 0 014-4h4a4 4 0 014 4v2m1-17.87a4 4 0 010 7.75m5 10.12v-2a4 4 0 00-3-3.85M5 7.325a4 4 0 108 0 4 4 0 00-8 0z"
        stroke={props.stroke ?? color.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
