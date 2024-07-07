// CalculatorScreen.js
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from '../config/theme/ThemeContext';
import { styles } from '../config/theme/app-theme';
import { CButton } from '../components/CButton';
import ChangeMode from '../components/ChangeMode';
import useOperation from '../hooks/useOperation';

export default function CalculatorScreen() {
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { reset, result, operacion, builOperation, evaluateOperacion, calculatePercentage, toggleSign } = useOperation();

  return (
    <View style={[styles.background, { backgroundColor: theme.backgroundColor }]}>
      <ChangeMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <View style={[styles.containerResult, { backgroundColor: theme.backgroundColor }]}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.subResult, { color: theme.primary }]}>{operacion}</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.mainResult, { color: theme.primary }]}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <CButton textButton='AC' bgColor={theme.backgroundColor} textColor={theme.primary} action={reset} />
          <CButton textButton='+/-' bgColor={theme.backgroundColor} textColor={theme.primary} action={toggleSign} />
          <CButton textButton='%' bgColor={theme.backgroundColor} textColor={theme.primary} action={calculatePercentage} />
          <CButton textButton='÷' bgColor={theme.buttonOperation} textColor={theme.primary} action={() => { builOperation('/') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='7' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('7') }} />
          <CButton textButton='8' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('8') }} />
          <CButton textButton='9' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('9') }} />
          <CButton textButton='x' bgColor={theme.buttonOperation} textColor={theme.primary} action={() => { builOperation('*') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='4' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('4') }} />
          <CButton textButton='5' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('5') }} />
          <CButton textButton='6' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('6') }} />
          <CButton textButton='-' bgColor={theme.buttonOperation} textColor={theme.primary} action={() => { builOperation('-') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='1' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('1') }} />
          <CButton textButton='2' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('2') }} />
          <CButton textButton='3' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('3') }} />
          <CButton textButton='+' bgColor={theme.buttonOperation} textColor={theme.primary} action={() => { builOperation('+') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='0' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('0') }} />
          <CButton textButton='.' bgColor={theme.backgroundColor} textColor={theme.primary} action={() => { builOperation('.') }} />
          <CButton textButton='=' bgColor={theme.buttonOperation} customStyle={styles.buttonEqual} action={evaluateOperacion} />
        </View>
      </View>
    </View>
  );
}
