// INFO: custom text component for i18n translation
import React from 'react';
import {Text as ReactNativeText} from 'react-native';
// import 'i18n';

// import {useLocalization} from 'utils';

import * as styles from './styles';

export const Text = props => {
  // const {t} = useLocalization();
  const {tx, txOptions, text, children, style, ...rest} = props;
  // const i18nText = tx && t(tx, txOptions);
  const content =
    // i18nText ||
    text || children;

  return (
    <ReactNativeText {...rest} style={[style, styles.textStyle()]}>
      {content}
    </ReactNativeText>
  );
};
