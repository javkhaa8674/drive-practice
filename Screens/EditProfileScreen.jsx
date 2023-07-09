import React, { useState, useMemo, useRef } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  LogBox,
  StatusBar,
} from "react-native";
import Icons, { IconType } from "react-native-dynamic-vector-icons";
import { TextInput } from "react-native-paper";
import "setimmediate";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as ImagePicker from "expo-image-picker";

import { COLORS, images, FONT } from "../constants";
import { Dropdown } from "../components";
import imagePlaceHolder from "../assets/images/kemal.jpg";
import { AuthStore } from "../store/authStore";
import { useNavigation } from "@react-navigation/native";

const EditProfileScreen = ({ navigation }) => {
  LogBox.ignoreAllLogs();
  const { loading, error, userInfo } = AuthStore.useState();
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [anotherPhoneNumber, setAnotherPhoneNumber] = useState(
    userInfo.anotherPhoneNumber
  );
  const [selectedGender, setSelectedGender] = useState(userInfo.selectedGender);
  const [address, setAddress] = useState(userInfo.address);
  const genderList = useMemo(
    () => [
      { gender: "Эрэгтэй", id: "1" },
      { gender: "Эмэгтэй", id: "2" },
    ],
    []
  );
  const [image, setImage] = useState(imagePlaceHolder);

  const sheetRef = useRef();
  const fall = new Animated.Value(1);

  const takePhotoFromCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      ediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 0.7,
      //base64: true,
    });

    // Explore the result
    console.log(result);

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri });
      console.log(result.assets[0].uri);
    }

    delete result.cancelled;
  };

  const choosePhotoFromLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 0.7,
      selectionLimit: 1,
      //base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri });
    }
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Зураг илгээх</Text>
        <Text style={styles.panelSubtitle}>
          Та өөрийн нүүр зургийг сонгоно уу?
        </Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Зураг авах</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Зургийн сангаас сонгох</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Буцах</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[500, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Animated.View
          style={{
            margin: 0,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
              <View>
                <ImageBackground
                  source={image}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icons
                      name="camera"
                      type={IconType.MaterialCommunityIcons}
                      size={26}
                      color={COLORS.lightWhite}
                      style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: COLORS.lightWhite,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "500" }}>
              {userInfo.displayName}
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput
              left={
                <TextInput.Icon icon="account" iconColor={COLORS.tertiary} />
              }
              underlineColor={COLORS.secondary}
              activeUnderlineColor={COLORS.tertiary}
              activeOutlineColor={COLORS.white}
              textColor={COLORS.primary}
              label="Овог"
              value={lastName}
              onChangeText={setLastName}
              style={{
                width: "100%",
                backgroundColor: COLORS.white,
              }}
              keyboardType="default"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              left={
                <TextInput.Icon icon="account" iconColor={COLORS.tertiary} />
              }
              underlineColor={COLORS.secondary}
              activeUnderlineColor={COLORS.tertiary}
              activeOutlineColor={COLORS.white}
              textColor={COLORS.primary}
              label="Нэр"
              value={firstName}
              onChangeText={setFirstName}
              style={{
                width: "100%",
                backgroundColor: COLORS.white,
              }}
              keyboardType="default"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              left={<TextInput.Icon icon="phone" iconColor={COLORS.tertiary} />}
              underlineColor={COLORS.secondary}
              activeUnderlineColor={COLORS.tertiary}
              activeOutlineColor={COLORS.white}
              textColor={COLORS.primary}
              label="Утас 1"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={{
                width: "100%",
                backgroundColor: COLORS.white,
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.action}>
            <TextInput
              left={<TextInput.Icon icon="phone" iconColor={COLORS.tertiary} />}
              underlineColor={COLORS.secondary}
              activeUnderlineColor={COLORS.tertiary}
              activeOutlineColor={COLORS.white}
              textColor={COLORS.primary}
              label="Утас 2"
              value={anotherPhoneNumber}
              onChangeText={setAnotherPhoneNumber}
              style={{
                width: "100%",
                backgroundColor: COLORS.white,
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.action}>
            <Dropdown
              data={genderList}
              name="Хүйс"
              iconName="gender-male-female"
              iconColor={COLORS.tertiary}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </View>
          <View style={styles.action}>
            <TextInput
              left={
                <TextInput.Icon
                  icon="map-marker-radius"
                  iconColor={COLORS.tertiary}
                />
              }
              underlineColor={COLORS.secondary}
              activeUnderlineColor={COLORS.tertiary}
              activeOutlineColor={COLORS.white}
              textColor={COLORS.primary}
              label="Гэрийн хаяг"
              value={address}
              onChangeText={setAddress}
              style={{
                width: "100%",
                backgroundColor: COLORS.white,
              }}
              keyboardType="default"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.commandButton,
                {
                  backgroundColor: COLORS.lightWhite,
                  borderWidth: 1,
                  borderColor: COLORS.tertiary,
                },
              ]}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text
                style={[styles.panelButtonTitle, { color: COLORS.tertiary }]}
              >
                Буцах
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButtonTitle}>Хадгалах</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //paddingTop: StatusBar.currentHeight,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  commandButton: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.tertiary,
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: COLORS.lightWhite,
    paddingTop: 20,
  },
  header: {
    backgroundColor: COLORS.lightWhite,
    shadowColor: "#33333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
  },
  panelTitle: {
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "white",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
