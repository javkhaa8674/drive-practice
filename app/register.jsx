import { useMemo, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-dynamic-vector-icons";
import firebase from "../api/firebase/config";

import styles from "./register.style";
import { COLORS } from "../constants";
import { Dropdown } from "../components";
import { TextInput } from "react-native-paper";
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
  const [secure, setSecure] = useState(true);
  const [confirmSecure, setConfirmSecure] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const genderList = useMemo(
    () => [
      { gender: "Эрэгтэй", id: "1" },
      { gender: "Эмэгтэй", id: "2" },
    ],
    []
  );

  const signup = async ({ email, password }) => {
    let check = false;
    for (let key in userInfo) {
      if (userInfo[key] === "") {
        check = true;
      }
    }
    if (check) {
      if (Platform.OS === "web") {
        alert("Та бүх талбарийг бөглөнө үү.");
      } else {
        Alert.alert("Та бүх талбарийг бөглөнө үү.");
      }
      return;
    }
    if (password !== confirmPassword) {
      if (Platform.OS === "web") {
        alert("Таны давтаж оруулсан нууц үг ижил биш байна.");
      } else {
        Alert.alert("Таны давтаж оруулсан нууц үг ижил биш байна.");
      }
      return;
    }
    setIsLoading(true);

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase
            .auth()
            .currentUser.sendEmailVerification({
              handleCodeInApp: true,
              url: "https://dadlaga-driver.firebaseapp.com",
            })
            .then(() => {
              if (Platform.OS === "web") {
                alert("Verification email sent");
              } else {
                Alert.alert("Verification email sent");
              }
            })
            .catch((error) => {
              if (Platform.OS === "web") {
                alert(error.message);
              } else {
                Alert.alert(error.message);
              }
            })
            .then(() => {
              firebase
                .firestore()
                .collection("users")
                .doc(app.auth().currentUser.uid)
                .set({
                  lastName,
                  firstName,
                  phoneNumber,
                  anotherPhoneNumber,
                  email,
                  selectedGender,
                  dateOfBirth,
                });
            })
            .catch((error) => {
              if (Platform.OS === "web") {
                alert(error.message);
              } else {
                Alert.alert(error.message);
              }
            });
        })
        .catch((error) => {
          if (Platform.OS === "web") {
            alert(error.message);
          } else {
            Alert.alert(error.message);
          }
        });
      setIsLoading(false);
    } catch (error) {
      if (Platform.OS === "web") {
        alert(error.message);
        setIsLoading(false);
      } else {
        Alert.alert(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={styles.heading}
          onPress={() => router.push("/camera")}
        >
          <Icon
            name="account"
            type="MaterialCommunityIcons"
            color={COLORS.white}
            size={150}
          />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            left={<TextInput.Icon icon="phone" />}
            underlineColor={COLORS.secondary}
            activeUnderlineColor={COLORS.tertiary}
            activeOutlineColor={COLORS.white}
            textColor={COLORS.primary}
            label="Утасны дугаар 1"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={{
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.white,
            }}
            keyboardType="phone-pad"
            // error={true}
          />
          <TextInput
            left={<TextInput.Icon icon="phone" />}
            underlineColor={COLORS.secondary}
            activeUnderlineColor={COLORS.tertiary}
            activeOutlineColor={COLORS.white}
            textColor={COLORS.primary}
            label="Утасны дугаар 2"
            value={anotherPhoneNumber}
            onChangeText={setAnotherPhoneNumber}
            style={{
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.white,
            }}
            keyboardType="phone-pad"
          />
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
            left={<TextInput.Icon icon="account" />}
            underlineColor={COLORS.secondary}
            activeUnderlineColor={COLORS.tertiary}
            activeOutlineColor={COLORS.white}
            textColor={COLORS.primary}
            label="Овог"
            value={lastName}
            onChangeText={setLastName}
            style={{
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.white,
            }}
            keyboardType="default"
          />
          <TextInput
            left={<TextInput.Icon icon="account" />}
            underlineColor={COLORS.secondary}
            activeUnderlineColor={COLORS.tertiary}
            activeOutlineColor={COLORS.white}
            textColor={COLORS.primary}
            label="Нэр"
            value={firstName}
            onChangeText={setFirstName}
            style={{
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.white,
            }}
            keyboardType="default"
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
          <TextInput
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => setConfirmSecure(!confirmSecure)}
              />
            }
            underlineColor={COLORS.secondary}
            activeUnderlineColor={COLORS.tertiary}
            activeOutlineColor={COLORS.white}
            textColor={COLORS.primary}
            label="Нууц үг давтаж оруулна уу?"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{
              width: "100%",
              marginTop: 20,
              backgroundColor: COLORS.white,
            }}
            keyboardType="default"
            secureTextEntry={confirmSecure}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={signup} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterPage;
