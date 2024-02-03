import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const EyeClose = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 25}
      viewBox="0 0 24 25"
      fill={color.white}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.585 10.912a2 2 0 002.829 2.828m3.267 3.258A8.718 8.718 0 0112 18.325c-3.6 0-6.6-2-9-6 1.272-2.12 2.712-3.678 4.32-4.674m2.86-1.146a9.056 9.056 0 011.82-.18c3.6 0 6.6 2 9 6-.666 1.11-1.379 2.067-2.138 2.87M3 3.325l18 18"
        stroke={props.stroke ?? color.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
