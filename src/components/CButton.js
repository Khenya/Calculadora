import React from 'react';

import { Pressable, Text } from 'react-native';
import { styles } from '../config/theme/app-theme';

export const CButton = ({ textButton, bgColor, textColor, action, customStyle }) => {
  return (
    <Pressable
      onPress={action}
      style={({ pressed }) => ({
        ...styles.button,
        ...customStyle,
        backgroundColor: bgColor,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{textButton}</Text>
    </Pressable>
  );
};