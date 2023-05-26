import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "./../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Сайн байна уу? Гантөмөр Жавхлантөгс</Text>
        <Text style={styles.welcomeMessage}>
          Та хүссэн цагтаа манай үйлчилгээг авах боломжтой.
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
