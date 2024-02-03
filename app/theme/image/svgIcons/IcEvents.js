import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Events = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v3.5M16 3v4M8 3v4m-4 4h11m2.8 9.817l-2.172 1.138a.391.391 0 01-.568-.41l.415-2.411-1.757-1.707a.39.39 0 01.217-.665l2.428-.352 1.086-2.193a.392.392 0 01.702 0l1.086 2.193 2.428.352a.39.39 0 01.217.665l-1.757 1.707.414 2.41a.39.39 0 01-.567.411L17.8 20.817z"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
