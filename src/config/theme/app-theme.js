import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
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
