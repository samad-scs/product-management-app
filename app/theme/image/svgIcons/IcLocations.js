import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Location = props => {
  return (
    <Svg
      width={props.width ?? 18}
      height={props.height ?? 21}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 9a3 3 0 106 0 3 3 0 00-6 0z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.657 14.657L10.414 18.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
