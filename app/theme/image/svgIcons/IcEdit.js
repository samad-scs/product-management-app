import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Edit = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.5 6.5l4 4M4 20h4L18.5 9.5a2.829 2.829 0 00-4-4L4 16v4z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
