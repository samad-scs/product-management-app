import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Meetings = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 21v-1a2 2 0 012-2h4a2 2 0 012 2v1m1-11h2a2 2 0 012 2v1M3 13v-1a2 2 0 012-2h2m3 3a2 2 0 104 0 2 2 0 00-4 0zm5-8a2 2 0 104 0 2 2 0 00-4 0zM5 5a2 2 0 104 0 2 2 0 00-4 0z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
