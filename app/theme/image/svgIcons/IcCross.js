import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Cross = props => {
  return (
    <Svg
      width={props.width ?? 16}
      height={props.height ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 4a.667.667 0 00-.943 0L8 7.057 4.943 4A.667.667 0 004 4.943L7.057 8 4 11.057a.667.667 0 00.943.943L8 8.943 11.057 12a.667.667 0 00.943-.943L8.943 8 12 4.943A.667.667 0 0012 4z"
        fill={props.fill ?? '#666'}
        fillOpacity={1}
      />
    </Svg>
  );
};
