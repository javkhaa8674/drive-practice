import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from "react-native";
import {
  Camera,
  CameraType,
  FlashMode,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
  getCameraPermissionsAsync,
  getMicrophonePermissionsAsync,
} from "expo-camera";
import Icon from "react-native-dynamic-vector-icons";
import * as ImagePicker from "expo-image-picker";

import { COLORS } from "../../../constants";

const CameraPage = () => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(true);
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [type, setType] = useState(CameraType.front);

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      // Camera
      const { status } = await requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");

      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  if (cameraPermission === "null") {
    return <View />;
  }

  if (cameraPermission === "false") {
    return <Text>No Access to Camera</Text>;
  }

  const getPermissions = async () => {
    const cameraPermission = await getCameraPermissionsAsync();
    return cameraPermission.granted;
  };

  if (!getPermissions()) {
    return Alert.alert(
      "Permissions required!",
      "You need to provide permissions to access camera",
      [{ text: "Got it" }]
    );
  }

  const switchFlashMode = () => {
    setFlashMode(flashMode === "off" ? "on" : "off");
  };

  const switchType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    if (cameraRef) {
      console.log("in take picture");
    }
    try {
      let photo = await cameraRef.current.takePictureAsync({
        allowsEditing: true,
        aspectRatio: [4, 3],
        quality: 1,
      });
      return photo;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <View style={{ flex: 1 }}>
          <View style={styles.cameraContainer}>
            <Camera
              ref={cameraRef}
              style={styles.fixedRatio}
              type={type}
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
              onPress={async () => {
                const r = await takePicture();
                setImage(r.uri);
                setShowCamera(false);
              }}
            />

            <Icon
              name={flashMode === "on" ? "zap" : "zap-off"}
              type="Feather"
              color={COLORS.primary}
              style={styles.button}
              onPress={switchFlashMode}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ flex: 1 }} />
        </View>
      )}
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
  },
  controlsContainer: {
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
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
