import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./Navigation/StackNavigation/AppNavigator";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Roboto-Black.ttf"),
    blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
    bold: require("./assets/fonts/Roboto-Bold.ttf"),
    boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    italic: require("./assets/fonts/Roboto-Italic.ttf"),
    light: require("./assets/fonts/Roboto-Light.ttf"),
    lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
    medium: require("./assets/fonts/Roboto-Medium.ttf"),
    mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
    thin: require("./assets/fonts/Roboto-Thin.ttf"),
    thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <AppNavigator onLayoutRootView={onLayoutRootView} />;
};

export default App;

const styles = StyleSheet.create({});
{
}
