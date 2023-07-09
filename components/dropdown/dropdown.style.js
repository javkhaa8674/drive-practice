import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
  },
  dropdownSelector: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  textInput: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.primary,
  },
  icon: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignSelf: "flex-end",
  },
  dropdownArea: {
    width: "100%",
    marginTop: 20,
    backgroundColor: COLORS.lightWhite,
    elevation: 0,
    alignSelf: "center",
  },
  countryItem: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray2,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default styles;
