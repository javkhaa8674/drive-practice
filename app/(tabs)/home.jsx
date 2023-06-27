import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import IndividualCard from "../../components/common/cards/individual/individualCard";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <IndividualCard />
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
