import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Нүүр хуудас</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
