import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, icons, images, SIZES, FONT } from "../constants";
import styles from "./index.style";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Main = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  // to get current status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...
  // Move to right ...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      {/* Menu Design */}
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

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: COLORS.lightWhite,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          // Transforming View ...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
          borderRadius: showMenu ? 15 : 0,
        }}
      >
        {
          // Menu Button ...
        }
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              // Do Actions Here ...
              // Scalling the view ...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? icons.close : icons.menu}
              resizeMode="cover"
              style={styles.btnImg(25)}
            />
          </TouchableOpacity>

          {currentTab === "Нүүр хуудас" ? <Welcome /> : <Nearbyjobs />}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Main;

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
