import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import Main from "./Main";
import Profile from "../../Screens/Profile";
import Service from "../../Screens/Service";
import Promotion from "../../Screens/Promotion";
import CustomDrawer from "../../components/customDrawer/CustomDrawer";
import { COLORS, FONT } from "../../constants";

const DrawerNavigator = (props) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerLabelStyle: { marginLeft: -25, fontFamily: FONT.medium },
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen
        name="Нүүр"
        component={Main}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Icons
              name="home"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Миний мэдээлэл"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Icons
              name="account"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Дадлагажуулах сургалт"
        component={Service}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Icons
              name="calendar"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Сурталчилгаа"
        component={Promotion}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Icons
              name="newspaper"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
