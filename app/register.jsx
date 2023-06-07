import { View, Text, KeyboardAvoidingView, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import styles from "./register.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images } from "../constants";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Image src={images} />
        <Text>Бүртгүүлэх</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Мэдээлэл оруулах ...</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterPage;
