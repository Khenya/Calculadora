import { StyleSheet } from "react-native";

export const colors = {
  // modo claro
  blueOperationButtonL: "#C5DAE7",
  white: "#EBEEEE",
  pinkLight: "#EDE5E6",
  pinkButton: "#C5DAE7",

  blue: '#0093FF',
  black: "#000000",
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerResult: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  buttonsContainer: {
    flex: 2,
    paddingTop: 20
  },
  mainResult: {
    color: colors.black,
    fontSize: 60,
    fontWeight: "500",
    textAlign: "right",
  },
  buttonEqual: {
    height: 80,
    width: 180,
    backgroundColor: colors.blue,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
     shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subResult: {
    color: colors.blue,
    fontSize: 35,
    textAlign: "right",
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.white,
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
    color: colors.black,
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    textColor: colors.blue
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
});