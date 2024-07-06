import { Text, View } from 'react-native';
import { styles } from '../config/theme/app-theme';
import { colors } from '../config/theme/app-theme';
import { CButton } from '../components/CButton';
import useOperation from '../hooks/useOperation';

export default function CalculatorScrean() {
  const { reset, result, operacion, builOperation, removeLast, evaluateOperacion } = useOperation();  

  return (
    <View style={styles.background}>
      <View style={styles.containerResult} >
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{result}</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>{operacion}</Text>
      </View>
      <View style={styles.buttonsContainer} >
        <View style={styles.row}>
          <CButton textButton='AC' bgColor={colors.yellow} action={reset}/>
          <CButton textButton='(' bgColor={colors.pink}/>
          <CButton textButton=')' bgColor={colors.pink}/>
          <CButton textButton='÷' bgColor={colors.pink} action={() => { builOperation('/') }}/>
        </View>
        <View style={styles.row}>
          <CButton textButton='7' bgColor={colors.pinkButton} action={() => { builOperation('7') }}/>
          <CButton textButton='8' bgColor={colors.pinkButton} action={() => { builOperation('8') }}/>
          <CButton textButton='9' bgColor={colors.pinkButton} action={() => { builOperation('9') }}/>
          <CButton textButton='x' bgColor={colors.pink} action={() => { builOperation('*') }}/>
        </View>
        <View style={styles.row}>
          <CButton textButton='4' bgColor={colors.pinkButton} action={() => { builOperation('4') }}/>
          <CButton textButton='5' bgColor={colors.pinkButton} action={() => { builOperation('5') }}/>
          <CButton textButton='6' bgColor={colors.pinkButton} action={() => { builOperation('6') }}/>
          <CButton textButton='-' bgColor={colors.pink} action={() => { builOperation('-') }}/>
        </View>
        <View style={styles.row}>
          <CButton textButton='1' bgColor={colors.pinkButton} action={() => { builOperation('1') }}/>
          <CButton textButton='2' bgColor={colors.pinkButton} action={() => { builOperation('2') }}/>
          <CButton textButton='3' bgColor={colors.pinkButton} action={() => { builOperation('3') }}/>
          <CButton textButton='+' bgColor={colors.pink} action={() => { builOperation('+') }}/>
        </View>
        <View style={styles.row}>
          <CButton textButton='0' bgColor={colors.pinkButton} action={() => { builOperation('0') }}/>
          <CButton textButton='.' bgColor={colors.pinkButton} action={() => { builOperation('.') }}/>
          <CButton textButton='←' bgColor={colors.pinkButton} action={removeLast}/>
          <CButton textButton='=' bgColor={colors.pink} action={evaluateOperacion}/>
        </View>
      </View>
    </View>
  );
}
