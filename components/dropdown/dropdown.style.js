import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    //backgroundColor: "red",
  },
  dropdownSelector: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    margin: SIZES.small,
  },
  icon: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  dropdownArea: {
    width: "90%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: COLORS.lightWhite,
    elevation: 5,
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
