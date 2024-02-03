import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../index';
export const Profile = props => {
  return (
    // <Svg
    //   width={props.width ?? 24}
    //   height={props.height ?? 24}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}>
    //   <Path
    //     d="M12 11a4 4 0 100-8 4 4 0 000 8zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
    //     stroke={props.stroke ?? color.black}
    //     strokeWidth={1.5}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </Svg>
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.168 19.174A4 4 0 0110 16.325h4a4 4 0 013.834 2.855M3 12.325a9 9 0 1018 0 9 9 0 00-18 0zm6-2a3 3 0 106 0 3 3 0 00-6 0z"
        stroke={props.stroke ?? color.black}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
