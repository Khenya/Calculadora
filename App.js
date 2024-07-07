import React from 'react';

import CalculatorScreen from './src/screen/CalculatorScreen'
import { ThemeProvider } from './src/config/theme/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <CalculatorScreen />
    </ThemeProvider>
  );
}