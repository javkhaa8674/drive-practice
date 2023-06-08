import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import Icon from "react-native-dynamic-vector-icons";
import styles from "./register.style";
import { COLORS, icons } from "../constants";
import { Dropdown, TextInput } from "../components";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();

  const genderList = useMemo(
    () => [
      { gender: "Эрэгтэй", id: "1" },
      { gender: "Эмэгтэй", id: "2" },
    ],
    []
  );
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.heading}>
        <Icon name="address-card" type="FontAwesome" color={COLORS.primary} />
        <Text style={styles.headingText}>Бүртгүүлэх</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          iconName="person"
          iconType="MaterialIcons"
          iconColor={COLORS.primary}
          placeholder="Овог"
          placeholderTextColor={COLORS.gray}
          keyboardType="default"
          secureTextEntry={true}
          multiline={false}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          iconName="person"
          iconType="MaterialIcons"
          iconColor={COLORS.primary}
          placeholder="Нэр"
          placeholderTextColor={COLORS.gray}
          keyboardType="default"
          secureTextEntry={true}
          multiline={false}
          value={lastName}
          onChangeText={setLastName}
        />
        <Dropdown
          data={genderList}
          name="Хүйс"
          iconName="male"
          iconType="FontAwesome"
          iconColor={COLORS.primary}
        />
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
