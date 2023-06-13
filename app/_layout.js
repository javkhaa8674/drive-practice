import { useCallback } from "react";
import { Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "../context/authContext";
import { COLORS, FONT } from "../constants/theme";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    black: require("../assets/fonts/Roboto-Black.ttf"),
    blackItalic: require("../assets/fonts/Roboto-BlackItalic.ttf"),
    bold: require("../assets/fonts/Roboto-Bold.ttf"),
    boldItalic: require("../assets/fonts/Roboto-BoldItalic.ttf"),
    italic: require("../assets/fonts/Roboto-Italic.ttf"),
    light: require("../assets/fonts/Roboto-Light.ttf"),
    lightItalic: require("../assets/fonts/Roboto-LightItalic.ttf"),
    medium: require("../assets/fonts/Roboto-Medium.ttf"),
    mediumItalic: require("../assets/fonts/Roboto-MediumItalic.ttf"),
    regular: require("../assets/fonts/Roboto-Regular.ttf"),
    thin: require("../assets/fonts/Roboto-Thin.ttf"),
    thinItalic: require("../assets/fonts/Roboto-ThinItalic.ttf"),
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
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.lightWhite,
          headerTitleStyle: {
            fontWeight: FONT.bold,
          },
          headerTitleAlign: "center",
        }}
        onLayout={onLayoutRootView}
      >
        <Stack.Screen
          name="index"
          options={{
            // Hide the header for all other routes.
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerTitle: "Нэвтрэх",
            // Hide the header for all other routes.
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerTitle: "Бүртгүүлэх",
            // Hide the header for all other routes.
            headerShown: true,
            headerRight: () => (
              <Button
                title="Open Modal"
                onPress={() => router.push("/modal")}
              />
            ),
            headerLeft: () => (
              <Button
                title="Take Picture"
                onPress={() => router.push("/camera")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            headerLeft: () => (
              <Button title="Close" onPress={() => router.replace("/login")} />
            ),
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};
export default Layout;
