import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Clock = props => {
  return (
    <Svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.5 10H10V5m-9 5a9 9 0 1018.001 0A9 9 0 001 10z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
