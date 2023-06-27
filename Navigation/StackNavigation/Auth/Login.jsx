import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

import { COLORS, SIZES, images } from "../../../constants";
import { AuthStore, appSignIn } from "../../../store/authStore";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const { loading } = AuthStore.useState();

  const handlePressLogin = async () => {
    AuthStore.update((store) => {
      store.loading = true;
    });
    const resp = await appSignIn(email, password);
    if (resp?.user) {
      navigation.navigate("Parent");
    } else {
      console.log("LoginPage", resp.error);
      Platform.OS === "web"
        ? alert(resp?.error)
        : Alert.alert("Login Error:", resp?.error);
    }
  };
  const handlePressRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {loading && (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: "1",
          }}
        />
      )}
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.logo} resizeMode="cover" style={styles.image} />
        </View>
        <TextInput
          left={<TextInput.Icon icon="email" />}
          underlineColor={COLORS.secondary}
          activeUnderlineColor={COLORS.tertiary}
          activeOutlineColor={COLORS.white}
          textColor={COLORS.primary}
          label="И-Мэйл хаяг"
          value={email}
          onChangeText={setEmail}
          style={{
            width: "100%",
            marginTop: 20,
            backgroundColor: COLORS.white,
          }}
          keyboardType="email-address"
        />
        <TextInput
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon icon="eye" onPress={() => setSecure(!secure)} />
          }
          underlineColor={COLORS.secondary}
          activeUnderlineColor={COLORS.tertiary}
          activeOutlineColor={COLORS.white}
          textColor={COLORS.primary}
          label="Нууц үг"
          value={password}
          onChangeText={setPassword}
          style={{
            width: "100%",
            marginTop: 20,
            backgroundColor: COLORS.white,
          }}
          keyboardType="default"
          secureTextEntry={secure}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handlePressLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: { width: "80%" },
  imageContainer: { justifyContent: "center", alignItems: "center" },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btnContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 700,
    fontSize: SIZES.medium,
  },
  buttonOutline: {
    backgroundColor: COLORS.lightWhite,
    marginTop: 5,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: SIZES.medium,
  },
});
