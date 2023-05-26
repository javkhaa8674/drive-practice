import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

import { COLORS, icons, images, SIZES, FONT } from "./constants";
import styles from "./index.style";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "./components";

const Home = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
        <Text style={styles.userName}>Гантөмөр Жавхлантөгс </Text>
        <TouchableOpacity>
          <Text style={styles.profileText}>Миний мэдээлэл</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons ...
          }
          {TabButton(currentTab, setCurrentTab, "Нүүр хуудас", icons.home)}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Цагийн хуваарь",
            icons.calendar
          )}
          {TabButton(currentTab, setCurrentTab, "Мэдэгдэл", icons.notification)}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Гүйлгээний түүх",
            icons.transaction
          )}
          {TabButton(currentTab, setCurrentTab, "Тохиргоо", icons.settings)}
        </View>
        <View>
          {TabButton(currentTab, setCurrentTab, "Гарах", icons.logout)}
        </View>
      </View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: COLORS.lightWhite,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {
          // Menu Button ...
        }
        <TouchableOpacity style={styles.btnContainer}>
          <Image
            source={icons.menu}
            resizeMode="cover"
            style={styles.btnImg("60%")}
          />
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;

// for multiple buttons ...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "logOut") {
          // do your stuff ...
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor:
            currentTab === title ? COLORS.lightWhite : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? COLORS.primary : COLORS.lightWhite,
          }}
        />
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONT.bold,
            paddingLeft: 15,
            color: currentTab == title ? COLORS.primary : COLORS.lightWhite,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
