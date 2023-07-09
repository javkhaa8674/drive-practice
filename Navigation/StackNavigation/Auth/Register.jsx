import { useMemo, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { TextInput } from "react-native-paper";

import { COLORS, SIZES } from "../../../constants";
import { Dropdown, DatePickerComponents } from "../../../components";
import { appSignUp, AuthStore } from "../../../store/authStore";

const RegisterPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [anotherPhoneNumber, setAnotherPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [confirmSecure, setConfirmSecure] = useState(true);
  const { loading } = AuthStore.useState();

  const genderList = useMemo(
    () => [
      { gender: "Эрэгтэй", id: "1" },
      { gender: "Эмэгтэй", id: "2" },
    ],
    []
  );

  const signup = async () => {
    let check = false;
    let userInfo = [
      phoneNumber,
      anotherPhoneNumber,
      email,
      lastName,
      firstName,
      selectedGender,
      dateOfBirth,
      address,
      password,
      confirmPassword,
    ];
    userInfo.forEach((el) => {
      if (el === "") {
        check = "true";
      }
    });
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

    // Spinner starting .....
    AuthStore.update((store) => {
      store.loading = true;
    });

    const resp = await appSignUp(
      phoneNumber,
      anotherPhoneNumber,
      email,
      lastName,
      firstName,
      selectedGender,
      dateOfBirth,
      address,
      password,
      lastName + " " + firstName
    );
    if (resp?.user) {
      navigation.navigate("Parent");
    } else {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
        Platform.OS === " web"
          ? alert("That email address is already in use!")
          : Alert.alert("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
        Platform.OS === " web"
          ? alert("That email address is invalid!")
          : Alert.alert("That email address is invalid!");
      } else {
        console.log(resp.error);
        Platform.OS === " web"
          ? alert("SignUp error:", resp?.error)
          : Alert.alert("SignUp error:", resp?.error);
      }
    }
  };

  return (
    <ScrollView>
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
        <TouchableOpacity
          style={styles.heading}
          onPress={() => {
            if (Platform.OS === "web") {
              alert(
                "Та гар утасны (android, ios) хувилбар дээр зураг оруулах боломжтой."
              );
              navigation.navigate("Register");
            } else {
              navigation.navigate("Camera");
            }
          }}
        >
          <Icon
            name="account"
            type="MaterialCommunityIcons"
            color={COLORS.white}
            size={100}
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
              backgroundColor: COLORS.white,
            }}
            keyboardType="default"
          />
          <Dropdown
            data={genderList}
            name="Хүйс"
            iconName="gender-male-female"
            //iconType="FontAwesome"
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
            left={<TextInput.Icon icon="map-marker-radius" />}
            underlineColor={COLORS.secondary}
            activeUnderlineColor={COLORS.tertiary}
            activeOutlineColor={COLORS.white}
            textColor={COLORS.primary}
            label="Гэрийн хаяг"
            value={address}
            onChangeText={setAddress}
            multiline
            style={{
              width: "100%",
              backgroundColor: COLORS.white,
            }}
            keyboardType="default"
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
              backgroundColor: COLORS.white,
            }}
            keyboardType="default"
            secureTextEntry={confirmSecure}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signup} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25,
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.xLarge,
    backgroundColor: COLORS.tertiary,
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
  headingText: {
    marginTop: SIZES.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  inputContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 700,
    fontSize: SIZES.medium,
  },
  buttonOutline: {
    backgroundColor: COLORS.lightWhite,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: SIZES.medium,
  },
});
