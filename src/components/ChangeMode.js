import React from 'react';
import { Switch, View } from 'react-native';

import { styles } from '../config/theme/app-theme';

const ChangeMode = ({ isDarkMode, toggleTheme }) => {
  return (
    <View style={styles.switchContainer}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
      />
    </View>
  );
};
export default ChangeMode;
