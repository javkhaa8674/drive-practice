import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import Main from "./Main";
import Profile from "../../Screens/Profile";
import Service from "../../Screens/Service";
import Promotion from "../../Screens/Promotion";
import CustomDrawer from "../../components/customDrawer/CustomDrawer";
import { COLORS } from "../../constants";

const DrawerNavigator = ({ navigation }) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -25, fontFamily: "Roboto-Medium" },
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
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
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
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
        name="Service"
        component={Service}
        options={{
          headerShown: true,
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
        name="Promotion"
        component={Promotion}
        options={{
          headerShown: true,
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
