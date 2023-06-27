import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Service from "../../Screens/Service";
import Promotion from "../../Screens/Promotion";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Нүүр",
          tabBarIcon: ({ color }) => (
            <Icons
              name="home"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Миний",
          tabBarIcon: ({ color }) => (
            <Icons
              name="account"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarLabel: "Сургалт",
          tabBarIcon: ({ color }) => (
            <Icons
              name="calendar"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarLabel: "Урамшуулал",
          tabBarIcon: ({ color }) => (
            <Icons
              name="newspaper"
              type={IconType.MaterialCommunityIcons}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
{
}
