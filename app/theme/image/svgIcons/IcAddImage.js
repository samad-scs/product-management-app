import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const AddImage = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13 6h.01M10.5 19H4a3 3 0 01-3-3V4a3 3 0 013-3h12a3 3 0 013 3v6.5M1 14l5-5c.928-.893 2.072-.893 3 0l4 4m-1-1l1-1c.67-.644 1.45-.824 2.182-.54M14 17h6m-3-3v6"
        stroke={props.stroke ?? '#354052'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
