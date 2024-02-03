import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
export const Check = props => {
  return (
    <Svg
      width={props.width ?? 16}
      height={props.height ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_8_4941)">
        <Path
          d="M14.88 2.954l-9.213 9.212a.667.667 0 01-.945 0L1.159 8.6a.667.667 0 00-1.09.728.667.667 0 00.146.217l3.564 3.563a2.005 2.005 0 002.833 0l9.212-9.21a.668.668 0 10-.945-.944z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8_4941">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
