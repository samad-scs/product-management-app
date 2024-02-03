import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const Home = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 21.325v-6a2 2 0 012-2h2a2 2 0 012 2v6m-10-9H3l9-9 9 9h-2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7z"
        stroke={props.stroke ?? color.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
