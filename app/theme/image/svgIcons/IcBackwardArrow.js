import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const BackWardArrow = props => {
  return (
    <Svg
      width={props.width ?? 9}
      height={props.height ?? 16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.643 16L0 8l7.643-8L9 1.42 2.713 8 9 14.58 7.643 16z"
        fill={props.fill ?? color.white}
      />
    </Svg>
  );
};
