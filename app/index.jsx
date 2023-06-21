import { View, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRouter, useSegments, useRootNavigationState } from "expo-router";
import { AuthContext } from "../context/authContext";
import { COLORS } from "../constants";

const App = () => {
  const router = useRouter();
  const segments = useSegments();
  const navigationState = useRootNavigationState();
  console.log(navigationState);

  useEffect(() => {
    if (!navigationState?.key) return;
    const tabs = segments[0] === "tabs";
    if (userToken === null && !tabs) {
      router.replace("/login");
    } else if (userToken !== null) {
      router.replace("/home");
    }
  }, [userToken === null, segments, navigationState?.key]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {navigationState?.key ? (
        <ActivityIndicator size={"large"} color={COLORS.primary} />
      ) : (
        <></>
      )}
    </View>
  );
};

export default App;
