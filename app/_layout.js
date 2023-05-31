import { useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Button } from "react-native";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    DMBold: require("./../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#10101E",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
      onLayout={onLayoutRootView}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Нэвтрэх",
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Бүртгүүлэх",
          // Hide the header for all other routes.
          headerShown: true,
          headerRight: () => (
            <Button title="Open Modal" onPress={() => router.push("modal")} />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerLeft: () => (
            <Button title="Close" onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
