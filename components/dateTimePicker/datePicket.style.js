import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    margin: SIZES.small,
    borderRadius: 15,
  },
  icon: { paddingHorizontal: 15, paddingVertical: 15 },
  textInput: {
    flex: 1,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    paddingTop: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  datePicker: {
    // marginTop: 10,
    // height: 120,
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: COLORS.lightWhite,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  buttonText: { fontSize: 14, fontWeight: 500, color: COLORS.lightWhite },
});

export default styles;
