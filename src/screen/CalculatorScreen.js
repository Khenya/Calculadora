import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../config/theme/app-theme';
import { colors } from '../config/theme/app-theme';
import { CButton } from '../components/CButton';
import ChangeMode from '../components/ChangeMode';
import useOperation from '../hooks/useOperation';

export default function CalculatorScreen() {
  // constantes de las operaciones
  const { reset, result, operacion, builOperation, evaluateOperacion, calculatePercentage, toggleSign } = useOperation();
  // constantes del tema
  let [isDarkMode, setIsDarkMode] = useState(false);
  let toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.background}>
      <ChangeMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <View style={styles.containerResult}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>{operacion}</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <CButton textButton='AC' bgColor={colors.dark.background} textColor={colors.blue} action={reset} />
          <CButton textButton='+/-' bgColor={colors.dark.background} textColor={colors.blue} action={toggleSign} />
          <CButton textButton='%' bgColor={colors.dark.background} textColor={colors.blue} action={calculatePercentage} />
          <CButton textButton='÷' bgColor={colors.dark.blueOperationButton} textColor={colors.dark.buttonText} action={() => { builOperation('/') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='7' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('7') }} />
          <CButton textButton='8' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('8') }} />
          <CButton textButton='9' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('9') }} />
          <CButton textButton='x' bgColor={colors.dark.blueOperationButton} textColor={colors.dark.buttonText} action={() => { builOperation('*') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='4' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('4') }} />
          <CButton textButton='5' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('5') }} />
          <CButton textButton='6' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('6') }} />
          <CButton textButton='-' bgColor={colors.dark.blueOperationButton} textColor={colors.dark.buttonText} action={() => { builOperation('-') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='1' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('1') }} />
          <CButton textButton='2' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('2') }} />
          <CButton textButton='3' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('3') }} />
          <CButton textButton='+' bgColor={colors.dark.blueOperationButton} textColor={colors.dark.buttonText} action={() => { builOperation('+') }} />
        </View>
        <View style={styles.row}>
          <CButton textButton='0' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('0') }} />
          <CButton textButton='.' bgColor={colors.dark.background} textColor={colors.dark.buttonText} action={() => { builOperation('.') }} />
          <CButton textButton='=' bgColor={colors.blue} customStyle={styles.buttonEqual} action={evaluateOperacion} />
        </View>
      </View>
    </View>
  );
}
