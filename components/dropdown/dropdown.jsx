import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, LogBox } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../../constants";
import styles from "./dropdown.style";

const CustomDropDown = ({
  data,
  name,
  iconName,
  iconColor,
  selectedGender,
  setSelectedGender,
}) => {
  const [select, setSelected] = useState(name);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useEffect(() => {
    setSelected(selectedGender);
  }, [selectedGender]);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownSelector}>
        <TextInput
          left={<TextInput.Icon icon={iconName} iconColor={iconColor} />}
          right={
            isClicked ? (
              <TextInput.Icon
                icon="chevron-up"
                onPress={() => setIsClicked(!isClicked)}
                iconColor={COLORS.tertiary}
              />
            ) : (
              <TextInput.Icon
                icon="chevron-down"
                onPress={() => setIsClicked(!isClicked)}
              />
            )
          }
          underlineColor={COLORS.white}
          activeUnderlineColor={COLORS.tertiary}
          activeOutlineColor={COLORS.white}
          textColor={COLORS.primary}
          label="Хүйс"
          editable={false}
          value={selectedGender}
          style={[
            styles.textInput,
            isClicked && {
              borderBottomWidth: 3,
              borderBottomColor: COLORS.tertiary,
            },
          ]}
        />
      </View>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setSelectedGender(item.gender);
                    setIsClicked(false);
                  }}
                >
                  <Text>{item.gender}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropDown;
