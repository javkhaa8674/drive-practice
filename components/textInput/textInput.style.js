import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
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
});

export default styles;
