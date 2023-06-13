import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "./../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: SIZES.medium,
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.xLarge,
  },
  headingText: {
    marginTop: SIZES.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  inputContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 700,
    fontSize: SIZES.medium,
  },
});

export default styles;
