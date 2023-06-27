import {
  View,
  TextInput,
  Text,
  Pressable,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-dynamic-vector-icons";
import { COLORS, SIZES } from "../../constants";

const TimePickerComponents = ({
  iconName,
  iconType,
  iconSize,
  iconColor,
  placeholder,
  placeholderTextColor,
  mode,
  value,
  show,
}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(currentDate.toLocaleTimeString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDateOfBirth(date.toLocaleTimeString());
    toggleDatePicker();
  };

  return (
    <View style={styles.container}>
      {!showPicker && (
        <Pressable onPress={toggleDatePicker} style={{ flexDirection: "row" }}>
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
            style={styles.textInput}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}

      {showPicker && (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ color: COLORS.primary, fontSize: 14 }}>
            {placeholder}
          </Text>
          <DateTimePicker
            //locale="mn-MN"
            mode="time"
            display="spinner"
            value={date}
            minuteInterval={10}
            is24Hour={false}
            onChange={onChange}
            style={styles.timePicker}
            textColor={COLORS.primary}
          />
          {showPicker && Platform.OS === "ios" && (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                onPress={toggleDatePicker}
                style={[
                  styles.button,
                  styles.pickerButton,
                  {
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={(styles.buttonText, { color: COLORS.primary })}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmIOSDate}
                style={[
                  styles.button,
                  styles.pickerButton,
                  {
                    backgroundColor: COLORS.primary,
                  },
                ]}
              >
                <Text style={(styles.buttonText, { color: COLORS.lightWhite })}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default TimePickerComponents;

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
  timePicker: {
    height: 120,
    marginTop: -10,
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
