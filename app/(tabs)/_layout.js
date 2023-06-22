import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Tabs, useRouter } from "expo-router";
import Icons, { IconType } from "react-native-dynamic-vector-icons";

import { appSignOut } from "../../store/authStore";
import { COLORS } from "../../constants";

const BottomTabs = () => {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Нүүр",
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <Icons
              name="home"
              type={IconType.MaterialCommunityIcons}
              size={size}
              color={color}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={async () => {
                const resp = await appSignOut();
                if (resp?.user) {
                  console.log(resp.error);
                  Platform.OS === " web"
                    ? alert("SignOut error:", resp.error?.message)
                    : Alert.alert("SignOut error:", resp.error?.message);
                } else {
                  router.replace("/login");
                }
              }}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>LogOut</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.replace("/")}
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
            <Icons
              name="account"
              type={IconType.MaterialCommunityIcons}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="service"
        options={{
          tabBarLabel: "Үйлчилгээ",
          headerTitle: "Цаг авах",
          tabBarIcon: ({ color, size }) => (
            <Icons
              name="calendar"
              type={IconType.MaterialCommunityIcons}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: "Мэдээлэл",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icons
              name="newspaper"
              type={IconType.MaterialCommunityIcons}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
