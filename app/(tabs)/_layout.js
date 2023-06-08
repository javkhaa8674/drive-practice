import { TouchableOpacity, Text } from "react-native";
import React, { useContext } from "react";
import { Tabs, useRouter } from "expo-router";
import Icons from "react-native-dynamic-vector-icons";
import { AuthContext } from "../../context/authContext";

const BottomTabs = () => {
  const router = useRouter();
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Нүүр",
          headerTitle: "Нүүр хуудас",
          tabBarIcon: ({ color, size }) => (
            <Icons name="home" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.replace("/login")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.replace("/login")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          ),
        }}
        style={{ flexDirection: "row" }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Бүртгэл",
          headerTitle: "Миний мэдээлэл",
          tabBarIcon: ({ color, size }) => (
            <Icons name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          tabBarLabel: "Үйлчилгээ",
          headerTitle: "Цаг авах",
          tabBarIcon: ({ color, size }) => (
            <Icons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: "Мэдээлэл",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icons name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
