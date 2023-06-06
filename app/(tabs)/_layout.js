import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../../context/authContext";

const BottomTabs = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Нүүр",
          headerTitle: "Нүүр хуудас",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
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
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          tabBarLabel: "Үйлчилгээ",
          headerTitle: "Цаг авах",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: "Мэдээлэл",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
