import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Service from "../../Screens/Service";
import Promotion from "../../Screens/Promotion";
import { TouchableOpacity } from "react-native";
import EditProfileScreen from "../../Screens/EditProfileScreen";
import { COLORS } from "../../constants";

const ProfileStack = createStackNavigator();
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
        component={ProfileStackScreen}
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

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.white,
        shadowColor: COLORS.white, // for ios
        elevation: 0, // for android
        borderBottomWidth: 0, //for web
      },
      headerTintColor: "#000",
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "",
        headerLeft: () => (
          <TouchableOpacity>
            <Icons
              name="ios-menu"
              type={IconType.Ionicons}
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => navigation.openDrawer()}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Icons
              name="account-edit"
              type={IconType.MaterialCommunityIcons}
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => navigation.navigate("EditProfile")}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <ProfileStack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        title: "Edit Profile",
      }}
    />
  </ProfileStack.Navigator>
);
