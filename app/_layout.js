import { useCallback, useState, useCallback } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS, FONT, SIZES, images, icons } from "../constants";
import { AuthStore } from "../store/authStore";

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
  const { initialized, isLoggedIn } = AuthStore.useState();

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
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontWeight: FONT.bold,
        },
        headerTitleAlign: "center",
        headerTitle: () => (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.logo}
              resizeMode="cover"
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        ),

        headerLeft: () => (
          // <TouchableOpacity
          //   onPress={() => {}}
          //   style={{
          //     flex: 1,
          //     alignItems: "center",
          //     justifyContent: "center",
          //     marginLeft: 20,
          //   }}
          // >
          //   <Icons
          //     name="menu"
          //     type={IconType.MaterialCommunityIcons}
          //     size={SIZES.xLarge}
          //     color={COLORS.gray}
          //   />
          // </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.replace("/");
            }}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            <Text style={{ color: "red" }}>Back</Text>
          </TouchableOpacity>
        ),
        headerRight: () =>
          isLoggedIn && (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <Icons
                name="bell"
                type={IconType.MaterialCommunityIcons}
                size={SIZES.xLarge}
                color={COLORS.gray}
              />
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  backgroundColor: COLORS.tertiary,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text color="red" style={{ fontSize: 10, color: COLORS.white }}>
                  1
                </Text>
              </View>
            </TouchableOpacity>
          ),
      }}
      onLayout={onLayoutRootView}
    />
  );
};
export default Layout;
