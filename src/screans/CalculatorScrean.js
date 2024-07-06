import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../config/theme/app-theme';
import { colors } from '../config/theme/app-theme';
import { CButton } from '../components/CButton';
import useOperation from '../hooks/useOperation';
import ThemeSwitch from '../components/ChangeMode';

export default function CalculatorScreen() {
  const { reset, result, operacion, builOperation, evaluateOperacion, calculatePercentage, toggleSign } = useOperation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.background}>
      <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <View style={styles.containerResult}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>{operacion}</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <CButton textButton='AC' bgColor={colors.white} textColor={colors.blue} action={reset} />
          <CButton textButton='+/-' bgColor={colors.white} textColor={colors.blue} action={toggleSign} />
          <CButton textButton='%' bgColor={colors.white} textColor={colors.blue} action={calculatePercentage} />
          <CButton textButton='÷' bgColor={colors.blueOperationButtonL} action={() => { builOperation('/') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='7' bgColor={colors.white} action={() => { builOperation('7') }} />
          <CButton textButton='8' bgColor={colors.white} action={() => { builOperation('8') }} />
          <CButton textButton='9' bgColor={colors.white} action={() => { builOperation('9') }} />
          <CButton textButton='x' bgColor={colors.blueOperationButtonL} action={() => { builOperation('*') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='4' bgColor={colors.white} action={() => { builOperation('4') }} />
          <CButton textButton='5' bgColor={colors.white} action={() => { builOperation('5') }} />
          <CButton textButton='6' bgColor={colors.white} action={() => { builOperation('6') }} />
          <CButton textButton='-' bgColor={colors.blueOperationButtonL} action={() => { builOperation('-') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='1' bgColor={colors.white} action={() => { builOperation('1') }} />
          <CButton textButton='2' bgColor={colors.white} action={() => { builOperation('2') }} />
          <CButton textButton='3' bgColor={colors.white} action={() => { builOperation('3') }} />
          <CButton textButton='+' bgColor={colors.blueOperationButtonL} action={() => { builOperation('+') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='0' bgColor={colors.white} action={() => { builOperation('0') }} />
          <CButton textButton='.' bgColor={colors.white} action={() => { builOperation('.') }} />
          <CButton textButton='=' bgColor={colors.blue} customStyle={styles.buttonEqual} action={evaluateOperacion} />
        </View>
      </View>
    </View>
  );
}
