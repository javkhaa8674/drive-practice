import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "./../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: SIZES.small,
    marginBottom: SIZES.small,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: COLORS.primary,
    fontSize: SIZES.large,
    marginTop: SIZES.small,
  },
  body: {
    alignItems: "center",
  },
  bodyText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    margin: SIZES.small,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: SIZES.small,
  },
  checkBox: {
    alignSelf: "center",
    backgroundColor: COLORS.primary,
  },
  checkBoxText: {
    margin: 8,
    color: COLORS.primary,
    fontWeight: FONT.lightItalic,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "40%",
    padding: SIZES.small,
    alignItems: "center",
    margin: SIZES.small,
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 700,
    fontSize: SIZES.small,
  },
  buttonOutline: {
    backgroundColor: COLORS.lightWhite,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: SIZES.small,
  },
});

export default styles;
