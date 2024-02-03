import {darkTheme, lightTheme} from './Colors';
import {useColorScheme} from 'react-native';

const colors = useColorScheme();
export let color = darkTheme;

export const getColors = theme => {
  color =
    theme == 'light'
      ? lightTheme
      : theme == 'system'
      ? colors == 'dark'
        ? darkTheme
        : lightTheme
      : darkTheme;
};
