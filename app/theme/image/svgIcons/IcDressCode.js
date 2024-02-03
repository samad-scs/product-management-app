import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../colorScheme';

export const DressCode = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={18}
      width={18}
      viewBox="0 0 448 512"
      {...props}>
      <Path
        d="M96 128a128 128 0 10256 0 128 128 0 10-256 0zm94.5 200.2l18.6 31-33.3 123.9-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-75.5-51.9-138.9-121.9-156.4-8.1-2-15.9 3.3-17.9 11.3l-36 146.9-33.3-123.9 18.6-31c6.4-10.7-1.3-24.2-13.7-24.2h-39.5c-12.4 0-20.1 13.6-13.7 24.2z"
        stroke={color.brightRed}
        strokeWidth={30}
        fill={'transparent'}
      />
    </Svg>
  );
};
