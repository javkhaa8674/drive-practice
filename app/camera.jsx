import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {
  Camera,
  CameraType,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
  getCameraPermissionsAsync,
  getMicrophonePermissionsAsync,
} from "expo-camera";
import Icon from "react-native-dynamic-vector-icons";

import { COLORS } from "../constants";

const CameraPage = () => {
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [flashMode, setFlashMode] = useState("off");
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    await requestCameraPermissionsAsync();
    await requestMicrophonePermissionsAsync();
  };

  const getPermissions = async () => {
    const cameraPermission = await getCameraPermissionsAsync();
    const microphonePermission = await getMicrophonePermissionsAsync();
    return cameraPermission.granted && microphonePermission.granted;
  };

  if (!getPermissions()) {
    return Alert.alert(
      "Permissions required!",
      "You need to provide permissions to access camera",
      [{ text: "Got it" }]
    );
  }

  const takePicture = async () => {
    const { uri, width, height } = await cameraRef?.current.takePictureAsync();
    // if (camera) {
    //   const data = await camera.takePictureAsync(null);
    //   setImage(data.uri);
    // }
    console.log("uri", uri);
    setImage(uri);
  };

  const switchFlashMode = () => {
    setFlashMode(flashMode === "off" ? "on" : "off");
  };

  const switchType = () => {
    setType(type === CameraType.back ? Camera.front : Camera.back);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
          flashMode={flashMode}
        />
      </View>
      <View style={styles.controlsContainer}>
        <Icon
          name="refresh-ccw"
          type="Feather"
          color={COLORS.primary}
          style={styles.button}
          onPress={switchType}
        />

        <TouchableOpacity
          style={styles.takePictureButton}
          onPress={takePicture}
        />

        <Icon
          name={flashMode === "on" ? "zap" : "zap-off"}
          type="Feather"
          color={COLORS.primary}
          style={styles.button}
          onPress={switchFlashMode}
        />
        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
      </View>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  controlsContainer: {
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
  },
  takePictureButton: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: "50%",
    height: 70,
    width: 70,
    marginVertical: 10,
  },
  button: {
    fontSize: 30,
    color: COLORS.lightWhite,
  },
});
