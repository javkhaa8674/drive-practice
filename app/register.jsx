import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useMemo, useState } from "react";
import { useRouter } from "expo-router";
import Icon from "react-native-dynamic-vector-icons";

import styles from "./register.style";
import { COLORS } from "../constants";
import { Dropdown, TextInput } from "../components";
import DatePickerComponents from "../components/dateTimePicker/datePicker";

const RegisterPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [anotherPhoneNumber, setAnotherPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const genderList = useMemo(
    () => [
      { gender: "Эрэгтэй", id: "1" },
      { gender: "Эмэгтэй", id: "2" },
    ],
    []
  );

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.heading}>
          <Icon name="address-card" type="FontAwesome" color={COLORS.primary} />
          <Text style={styles.headingText}>Бүртгүүлэх</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            iconName="call"
            iconType="MaterialIcons"
            iconColor={COLORS.primary}
            placeholder="Утасны дугаар 1"
            placeholderTextColor={COLORS.gray}
            keyboardType="phone-pad"
            multiline={false}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextInput
            iconName="call"
            iconType="MaterialIcons"
            iconColor={COLORS.primary}
            placeholder="Утасны дугаар 2"
            placeholderTextColor={COLORS.gray}
            keyboardType="phone-pad"
            value={anotherPhoneNumber}
            onChangeText={setAnotherPhoneNumber}
          />
          <TextInput
            iconName="mail"
            iconType="MaterialIcons"
            iconColor={COLORS.primary}
            placeholder="И-Мэйл хаяг"
            placeholderTextColor={COLORS.gray}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            iconName="person"
            iconType="MaterialIcons"
            iconColor={COLORS.primary}
            placeholder="Овог"
            placeholderTextColor={COLORS.gray}
            keyboardType="default"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            iconName="person"
            iconType="MaterialIcons"
            iconColor={COLORS.primary}
            placeholder="Нэр"
            placeholderTextColor={COLORS.gray}
            keyboardType="default"
            value={firstName}
            onChangeText={setFirstName}
          />
          <Dropdown
            data={genderList}
            name="Хүйс"
            iconName="intersex"
            iconType="FontAwesome"
            iconColor={COLORS.primary}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />
          <DatePickerComponents
            iconName="calendar"
            iconType="FontAwesome"
            iconColor={COLORS.primary}
            placeholder="Төрсөн өдөр"
            placeholderTextColor={COLORS.gray}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
          />
          <TextInput
            iconName="lock"
            iconType="FontAwesome"
            iconColor={COLORS.primary}
            secureTextEntry={true}
            placeholder="Нууц үг"
            placeholderTextColor={COLORS.gray}
            keyboardType="default"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            iconName="lock"
            iconType="FontAwesome"
            iconColor={COLORS.primary}
            placeholder="Нууц үг давтаж оруулна уу?"
            placeholderTextColor={COLORS.gray}
            keyboardType="default"
            secureTextEntry={true}
            multiline={false}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterPage;
