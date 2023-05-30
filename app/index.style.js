import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "./../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.medium / 1.25,
  }),
  userName: {
    marginTop: 20,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  profileText: {
    marginTop: 15,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
    marginTop: 2,
  },
});

export default styles;
