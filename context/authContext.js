import React, { createContext, useState } from "react";
import { Alert, Platform } from "react-native";
import { firebase } from "../api/firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userToken, setUserToken] = useState(null);
  
  const login = async ({ email, password }) => {
    setIsLoading(true);
    await firebase
      .auth()
      .signInWithCredential(credential)
      .then(async (data) => {
        const jwtToken = await data.user?.getIdToken();
        console.log(jwtToken);
        setUserToken(jwtToken);
      });
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setUserInfo(snapshot.data());
            console.log(userInfo);
          } else {
            if (Platform.OS === "web") {
              alert("User does not exist");
            } else {
              Alert.alert("User does not exist");
            }
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

  const logout = () => {
    
    setUserToken(null);
    setIsLoading(false);
  };

  const signup = async ({ email, password }) => {
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
                .doc(firebase.auth().currentUser.uid)
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
    <AuthContext.Provider
      value={{ login, logout, signup, userInfo, userToken, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
