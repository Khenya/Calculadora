# Calculadora
Esta es una aplicación de calculadora desarrollada en React Native con Expo. La aplicación permite realizar operaciones matemáticas básicas, como suma, resta, cambiar de signo, entre otras. Además, esta aplicacion te permite cambiar entre modos de color claro y oscuro.

## Prerrequisitos
- Computadora con las herramientas necesarias instaladas (Node.js, npm, Expo CLI).

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Khenya/Calculadora.git

2. Instalar las dependencias del proyecto
   ```bash
   npm i
   ```
   
3. Iniciar el proyecto
    ```bash
   npx expo start
   ```

4. Abrir el proyecto
- Para abrir el proyecto solo nesecitas escanear el qr desde tu celular android o iSO 
  - Para abrir la aplicación desde Android dedes tener la aplicacion **Expo Go**, ingresar a la misma y escanear el código QR que aparece en tu terminal despues de realizar el paso 3.
  - Para abrir la aplicación desde iOS necesitas tener la aplicacion **Expo Go**, ingresar a la camar de tu celular, escanear el código QR que aparece en tu terminal despues de realizar el paso 3, el cual te dara un enlase que te redirecciona a la aplicación **Expo Go**.
  - Para abrir desde un emulador android, despues de realizar el paso 3 debes presionar la tecla **a**
  - Para abrir desde un emulador de iOS, despues de realizar el paso 3 debes presionar la tecla **i**. (Para esta opción necesitas tener una Mac)

## Estructura del Repositorio
```
Calculadora/
├── src
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │    |── CButton.js
│   │    └── ChangeMode.js
│   ├── config/
│   │   └── theme/
│   │       |── app-theme.js
│   │       |── ThemeContext.js
│   │       └── Themes.js
│   ├── hooks/
│   │   ├── useOperation.js
│   ├── plaginas/
│   │   ├── mathPlagin.js
│   ├── screen/
│   │   ├── CalculatorScreen.js
│   ├── utils/
│   │   ├── OperationUtils.js
├──.gitignore
├── App.js
├── README.md
│── app.json
├── babel.config.js
│── package-lock.json
└── package.json
```

