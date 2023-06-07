import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./checkbox.style";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity, Text } from "react-native";

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = SIZES.xxLarge,
  color = COLORS.primary,
  text = "",
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}
  >
    <Icon
      size={size}
      color={color}
      name={selected ? "check-box" : "check-box-outline-blank"}
    />

    <Text style={textStyle}> {text} </Text>
  </TouchableOpacity>
);

export default CheckBox;
