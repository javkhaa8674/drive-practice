import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useRouter } from "expo-router";
import styles from "./index.style";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/authContext";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePressLogin = () => {
    // login();
    router.replace("/home");
  };
  const handlePressRegister = () => {
    router.replace("/modal");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
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
