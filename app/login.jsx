import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import styles from "./index.style";
import { AuthContext } from "../context/authContext";
import { COLORS } from "../constants";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handlePressLogin = () => {
    router.replace("/home");
  };
  const handlePressRegister = () => {
    router.replace("/register");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          left={<TextInput.Icon icon="mail" />}
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
        {/* <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        /> */}
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
