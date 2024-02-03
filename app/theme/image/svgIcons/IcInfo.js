import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
// import {color} from 'theme';
export const Info = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 7h.01M9 10h1v4h1M10 1c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z"
        stroke={props.stroke ?? color.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
