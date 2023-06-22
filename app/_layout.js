import { useCallback, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
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
    />
  );
};
export default Layout;
