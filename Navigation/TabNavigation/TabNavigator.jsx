import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Service from "../../Screens/Service";
import Promotion from "../../Screens/Promotion";
import { TouchableOpacity } from "react-native";
import ChooseDate from "../../Screens/ChooseDate";
import EditProfileScreen from "../../Screens/EditProfileScreen";
import { COLORS, SIZES, icons } from "../../constants";

const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ServiceStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: COLORS.lightWhite,
        paddingTop: 7,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        borderTopWidth: 0.2,
        borderColor: COLORS.gray,
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <Tab.Screen
        name="Нүүр хэсэг"
        component={MainStackScreen}
        options={{
          tabBarLabel: "Нүүр",
          tabBarIcon: ({ color }) => (
            <Icons
              name="home"
              type={IconType.MaterialCommunityIcons}
              size={30}
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
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServiceStackScreen}
        options={{
          tabBarLabel: "Сургалт",
          tabBarIcon: ({ color }) => (
            <Icons
              name="calendar"
              type={IconType.MaterialCommunityIcons}
              size={30}
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
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator
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
    <MainStack.Screen
      name="Миний"
      component={Home}
      options={{
        title: "",
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
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
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View>
              <ImageBackground
                source={icons.notification}
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
                imageStyle={{ borderRadius: 15, tintColor: COLORS.gray }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    backgroundColor: COLORS.tertiary,
                  }}
                >
                  <Text style={{ color: COLORS.lightWhite, fontSize: 10 }}>
                    3
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        ),
      }}
    />
    <MainStack.Screen
      name="ChooseDate"
      component={ChooseDate}
      options={{
        title: "Choose Date Modal",
      }}
    />
  </MainStack.Navigator>
);

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
          <TouchableOpacity style={{ marginLeft: 10 }}>
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
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Icons
              name="account-edit"
              type={IconType.MaterialCommunityIcons}
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => navigation.navigate("EditProfileScreen")}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <ProfileStack.Screen
      name="EditProfileScreen"
      component={EditProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

const ServiceStackScreen = ({ navigation }) => (
  <ServiceStack.Navigator
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
    <ServiceStack.Screen
      name="Үйлчилгээ"
      component={Service}
      options={{
        title: "",
        // headerLeft: () => (
        //   <TouchableOpacity style={{ marginLeft: 10 }}>
        //     <Icons
        //       name="ios-menu"
        //       type={IconType.Ionicons}
        //       size={25}
        //       backgroundColor="#fff"
        //       color="#000"
        //       onPress={() => navigation.openDrawer()}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    />
  </ServiceStack.Navigator>
);
