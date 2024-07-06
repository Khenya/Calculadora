import { useState } from "react";
import { c_evaluate } from "../plaginas/mathPlagin"; // corregido el nombre del archivo
//import {operators} from '../utils/OperationUtil'
const operators = ['+','-', 'x', '÷'];

const useOperation = () => {
  const [result, setResult] = useState('10');
  const [operacion, setOperacion] = useState('5*1');

  const reset = () => {
    setResult('0');
    setOperacion('');
  };

  const removeLast = () => {
    if (operacion.length === 1) {
      setOperacion('');
      return;
    }
    setOperacion(operacion.substring(0, operacion.length - 1)); // Corregido
  };

  const evaluateOperacion = () => {
    if (operacion === '') return;
    if (operacion === result) return;
    try {
      let result = c_evaluate(operacion);
      setResult(result);
      setOperacion(result);
    } catch (error) {
      setResult('Error');
      setOperacion('');
    }
  };

  const builOperation = (text) => {
    if (text === '0' && operacion === '0') return;
    if (text === '.' && operacion.includes('.')) return;

    if (text === '.' && operacion === '') {
      setOperacion('0.');
      return;
    }
    if (operators.includes(text) && operators.includes(operacion[operacion.length - 1])) return;
    setOperacion(operacion + text);
  };

  return {
    reset,
    result,
    operacion,
    setResult,
    setOperacion,
    removeLast,
    evaluateOperacion,
    builOperation, // Asegúrate de devolver builOperation
  };
};

export default useOperation;
