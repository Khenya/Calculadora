import React from 'react';

import { Pressable, Text } from 'react-native';
import { styles } from '../config/theme/app-theme';

export const CButton = ({ textButton, bgColor, action }) => {
  return (
    <Pressable
      onPress={action}
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: bgColor,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text style={styles.buttonText}>{textButton}</Text>
    </Pressable>
  );
};
