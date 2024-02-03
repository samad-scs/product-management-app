import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const RightArrow = props => {
  return (
    <Svg
      width={props.width ?? 9}
      height={props.height ?? 15}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.414 15L0 13.586l5.793-5.793L0 2 1.414.586l7.207 7.207L1.414 15z"
        fill={props.fill ?? color.white}
      />
    </Svg>
  );
};
