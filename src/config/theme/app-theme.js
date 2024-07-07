import { StyleSheet } from "react-native";

export const colors = {
  
  blue: '#0093FF',
  black: "#000000",
  // modo claro
  light: {
    background: "#EBEEEE",
    buttonText: "#000000",
    blueOperationButton: "#C5DAE7"
  },
  // modo oscuro
  dark: {
    background: "#000000",
    buttonText: "#EBEEEE",
    blueOperationButton: "#003257"
  },
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.dark.background
  },
  containerResult: {
    flex: 1,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonsContainer: {
    flex: 2,
    paddingTop: 20,
  },
  mainResult: {
    color: colors.blue,
    fontSize: 60,
    fontWeight: "500",
    textAlign: "right",
  },
  buttonEqual: {
    height: 80,
    width: 180,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subResult: {
    fontSize: 35,
    textAlign: "right",
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
  },
});
