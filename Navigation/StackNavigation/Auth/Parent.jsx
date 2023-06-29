import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerNavigator from "../../DrawerNavigation/DrawerNavigator";

const Parent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator {...props} />
    </View>
  );
};

export default Parent;

const styles = StyleSheet.create({});
