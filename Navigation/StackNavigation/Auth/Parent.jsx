import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
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
