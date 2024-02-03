import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Attendance = props => {
  return (
    <Svg
      width={props.width ?? 19}
      height={props.height ?? 20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.5 19H3a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v6M13 1v4M5 1v4M1 9h16m-5 8l2 2 4-4"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
