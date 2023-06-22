import { View, ActivityIndicator } from "react-native";
import React, { useEffect  } from "react";
import { useRouter, useSegments, useRootNavigationState } from "expo-router";
import { AuthStore } from "../store/authStore";
import { COLORS } from "../constants";

const App = () => {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const { initialized, isLoggedIn } = AuthStore.useState();

  useEffect(() => {
    if (!navigationState?.key || !initialized) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (
      //if user is not signed in and initial segment is not anything
      // segment is not anything in the auth group
      !isLoggedIn &&
      !inAuthGroup
    ) {
      // redirect to the login page
      router.replace("/login");
    } else if (isLoggedIn) {
      // go to the tab root
      router.replace("(tabs)/home");
    }
  }, [segments, navigationState?.key, initialized]);

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
