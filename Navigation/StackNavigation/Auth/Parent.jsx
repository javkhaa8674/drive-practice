import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerNavigator from "../../DrawerNavigation/DrawerNavigator";

const Parent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator navigation={navigation} />
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({});
