import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-dynamic-vector-icons";
import styles from "./textInput.style";

const TextInputComponents = ({
  iconName,
  iconType,
  iconSize,
  iconColor,
  placeholder,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  multiline,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        type={iconType}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputComponents;
