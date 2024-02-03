import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';

import {color} from '../..';
// import {color} from 'theme';
export const Glob = props => {
  return (
    <Svg
      width={props.width ?? 24}
      height={props.height ?? 22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_514_52542)">
        <Path
          d="M3.6 7h16.8M3.6 13h16.8M11.5 1a17 17 0 000 18m1-18a17 17 0 010 18M3 10a9 9 0 1018.001 0A9 9 0 003 10z"
          stroke={props.stroke ?? '#354052'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
