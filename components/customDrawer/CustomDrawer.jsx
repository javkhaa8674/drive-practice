import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { COLORS, FONT, SIZES, images } from "../../constants";
import { TouchableOpacity } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const CustomDrawer = (props) => {
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
          <Image source={images.profile} style={styles.Image} />
          <Text style={styles.ImageText}>Дорж Бат</Text>
          <Text style={[styles.ImageText, styles.ImageTextSecond]}>
            Миний мэдээлэл
          </Text>
        </ImageBackground>
        <View style={styles.DrawerItemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.BottomContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.Bottom}>
          <Icon
            name="exit-to-app"
            type={IconType.MaterialCommunityIcons}
            size={26}
            color={COLORS.primary}
          />
          <Text style={styles.BottomText}>Sign Out</Text>
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
    fontFamily: "Roboto-Medium",
  },
  ImageTextSecond: {
    fontSize: SIZES.small,
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Medium",
    marginLeft: 5,
  },
});
