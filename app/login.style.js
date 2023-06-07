import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "./../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btnContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
  buttonOutline: {
    backgroundColor: COLORS.lightWhite,
    marginTop: 5,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: SIZES.medium,
  },
});

export default styles;
