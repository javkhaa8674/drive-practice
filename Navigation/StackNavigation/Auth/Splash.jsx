import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { COLORS } from "../../../constants";
import { AuthStore } from "../../../store/authStore";

const Splash = ({ navigation }) => {
  const { initialized, isLoggedIn } = AuthStore.useState();

  useEffect(() => {
    if (!initialized) return;
    if (!isLoggedIn) {
      // redirect to the login page
      navigation.navigate("Login");
    } else if (isLoggedIn) {
      // go to the tab root
      navigation.navigate("Parent");
    }
  }, [initialized, isLoggedIn]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={COLORS.primary} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
