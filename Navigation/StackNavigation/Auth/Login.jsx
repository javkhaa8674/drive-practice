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
import { COLORS, SIZES, images, FONT, icons } from "../../../constants";
import { AuthStore, appSignIn } from "../../../store/authStore";
import { Alert } from "react-native";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const { loading } = AuthStore.useState();

  const handlePressLogin = async () => {
    if (email === "" || password === "") {
      if (Platform.OS === "web") {
        alert("Та нэвтрэх нэр, нууц үгээ оруулна уу?");
      } else {
        Alert.alert("Та нэвтрэх нэр, нууц үгээ оруулна уу?");
      }
      navigation.navigate("Login");
    } else {
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
    }
  };
  const handlePressRegister = () => {
    navigation.navigate("Register");
  };

  const handlePressForgotPassword = () => {
    navigation.navigate("ForgotPassword");
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
          left={<TextInput.Icon icon="account-outline" />}
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
          <Text style={styles.buttonText}>Нэвтрэх</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 15, color: COLORS.gray }}>эсвэл...</Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.primary,
            paddingHorizontal: 15,
            marginRight: 15,
            paddingVertical: 5,
          }}
        >
          <Image source={icons.google} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.primary,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <Image source={icons.facebook} style={{ width: 45, height: 45 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.primary,
            paddingHorizontal: 15,
            marginLeft: 15,
            paddingVertical: 5,
          }}
        >
          <Image source={icons.twitter} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontSize: SIZES.small,
            fontFamily: FONT.light,
          }}
        >
          Шинэ үйлчлүүлэгч бол?
        </Text>
        <TouchableOpacity
          onPress={handlePressRegister}
          style={{ color: COLORS.tertiary }}
        >
          <Text style={styles.buttonOutlineText}>Бүртгүүлэх</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={handlePressForgotPassword}
          style={{ color: COLORS.tertiary }}
        >
          <Text style={styles.buttonOutlineText}>Нууц үг мартсан?</Text>
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
    fontWeight: 200,
    fontSize: SIZES.large,
  },
  buttonOutline: {
    backgroundColor: COLORS.lightWhite,
    marginTop: 5,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: COLORS.tertiary,
    fontWeight: 200,
    fontSize: SIZES.small,
    fontFamily: FONT.light,
    marginLeft: 5,
  },
  socialContainer: {
    width: "80%",
    flexDirection: "row",
    marginTop: 15,
  },
});
