import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useRouter, Stack } from "expo-router";
import styles from "../index.style";
import { COLORS } from "../../constants";
import { AuthStore, appSignIn } from "../../store/authStore";
import { ActivityIndicator } from "react-native";

const LoginPage = () => {
  const router = useRouter();
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
      router.replace("(tabs)/home");
    } else {
      console.log("LoginPage", resp.error);
      Platform.OS === "web"
        ? alert(resp?.error)
        : Alert.alert("Login Error:", resp?.error);
    }
  };
  const handlePressRegister = () => {
    AuthStore.update((e) => {
      e.isLoggedIn = true;
    });
    router.replace("/register");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Stack.Screen options={{ title: "Login", headerLeft: () => <></> }} />
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
