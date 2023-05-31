import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Мэдээлэл оруулах ...</Text>
      <View style={{ marginTop: 12 }}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </View>
  );
};

export default RegisterPage;
