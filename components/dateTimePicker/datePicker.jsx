import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-dynamic-vector-icons";
import { COLORS, SIZES } from "../../constants";

const DatePickerComponents = ({
  iconName,
  iconType,
  iconSize,
  iconColor,
  placeholder,
  placeholderTextColor,
  dateOfBirth,
  setDateOfBirth,
}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(currentDate.toLocaleDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const onChangeWeb = (e) => {
    setDateOfBirth(date.toLocaleDateString());
  };

  const confirmIOSDate = () => {
    setDateOfBirth(date.toLocaleDateString());
    toggleDatePicker();
  };

  return (
    <View style={styles.container}>
      {!showPicker && (Platform.OS === "ios" || Platform.OS === "android") && (
        <Pressable onPress={toggleDatePicker} style={{ flexDirection: "row" }}>
          <TextInput
            left={<TextInput.Icon icon="calendar" />}
            label={placeholder}
            style={styles.textInput}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}

      {/* Android iOS version can be seen here */}
      {showPicker && (Platform.OS === "ios" || Platform.OS === "android") && (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <DateTimePicker
            locale="en-EN"
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
            style={styles.datePicker}
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
      {/* Web version can be seen here */}
      {Platform.OS === "web" && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["MobileDatePicker"]}
              sx={{ width: "100%", flex: 1 }}
            >
              <MobileDatePicker
                label="Төрсөн өдөр"
                value={dayjs(date)}
                sx={{ width: "100%" }}
                className="flat"
                onChange={(newValue) => onChangeWeb(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </View>
      )}
    </View>
  );
};

export default DatePickerComponents;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    marginTop: 5,
  },
  icon: { paddingHorizontal: 15, paddingVertical: 15 },
  textInput: {
    flex: 1,
    backgroundColor: COLORS.white,
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
