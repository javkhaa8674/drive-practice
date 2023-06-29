import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { appSignOut, AuthStore } from "../../store/authStore";
import { COLORS, FONT, SIZES, images } from "../../constants";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const { user, isLoggedIn, loading } = AuthStore.useState();

  const HandleSignOut = async () => {
    const resp = await appSignOut();
    if (resp.user === null) {
      navigation.replace("Login");
    } else {
      navigation.navigate("Parent");
    }
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentStyle}
      >
        <ImageBackground
          source={images.backgroundImg}
          style={styles.ImageBackground}
        >
          <TouchableOpacity onPress={() => {}}>
            <Image source={images.profile} style={styles.Image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.ImageText}>Батбаяр Ганзориг</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.ImageText, styles.ImageTextSecond]}>
              Миний мэдээлэл
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.DrawerItemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.BottomContainer}>
        <TouchableOpacity onPress={HandleSignOut} style={styles.Bottom}>
          <Icon
            name="exit-to-app"
            type={IconType.MaterialCommunityIcons}
            size={26}
            color={COLORS.primary}
          />
          <Text style={styles.BottomText}>Гарах</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentStyle: {
    backgroundColor: "#8200d6",
  },
  ImageBackground: {
    padding: 20,
  },
  Image: { height: 80, width: 80, borderRadius: 40, marginBottom: 10 },
  ImageText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  ImageTextSecond: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.tertiary,
    marginTop: 5,
  },
  DrawerItemContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  BottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
  },
  Bottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  BottomText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    marginLeft: 5,
  },
});
