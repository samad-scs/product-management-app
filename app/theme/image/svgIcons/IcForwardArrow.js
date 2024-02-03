import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const ForwardArrow = props => {
  return (
    <Svg
      width={props.width ?? 12}
      height={props.height ?? 9}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.5 9L6.45 7.912 9.113 5.25H0v-1.5h9.113L6.45 1.087 7.5 0 12 4.5 7.5 9z"
        fill={props.fill ?? color.white}
      />
    </Svg>
  );
};
