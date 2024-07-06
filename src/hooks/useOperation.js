import { useState } from "react";
import { c_evaluate } from "../plaginas/mathPlagin";
import { operators } from '../utils/OperationUtil';

const useOperation = () => {
  const [result, setResult] = useState('0');
  const [operacion, setOperacion] = useState('');

  const reset = () => {
    setResult('0');
    setOperacion('');
  };

  const evaluateOperacion = () => {
    if (operacion === '') return;
    try {
      let evaluatedResult = c_evaluate(operacion);
      setResult(String(evaluatedResult));
      setOperacion(String(evaluatedResult));
    } catch (error) {
      console.error('Evaluation error:', error);
      setResult('Error');
      setOperacion('');
    }
  };

  const builOperation = (text) => {
    if (text === '0' && operacion === '0') return;

    if (text === '.' && operacion === '') {
      setOperacion('0.');
      return;
    }

    if (text === '.' && operacion.includes('.')) {
      // Handle if a decimal is already present in the current number
      const lastNumber = operacion.split(/[+\-*/]/).pop();
      if (lastNumber.includes('.')) return;
    }

    if (operators.includes(text) && operators.includes(operacion[operacion.length - 1])) return;

    setOperacion(operacion + text);
  };

  const calculatePercentage = () => {
    if (operacion === '') return;
    try {
      let result = c_evaluate(operacion);
      let percentageResult = result / 100;
      setResult(String(percentageResult));
      setOperacion(String(percentageResult));
    } catch (error) {
      console.error('Percentage calculation error:', error);
      setResult('Error');
      setOperacion('');
    }
  };

  const toggleSign = () => {
    if (result === '0') return;
    const newResult = String(parseFloat(result) * -1);
    setResult(newResult);
    setOperacion(newResult);
  };

  return {
    reset,
    result,
    operacion,
    setResult,
    setOperacion,
    evaluateOperacion,
    builOperation,
    calculatePercentage,
    toggleSign
  };
};

export default useOperation;
