import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_FQLT3uBwm8-dZcE76rk70WW_jxtKDwU",
  authDomain: "dadlaga-driver.firebaseapp.com",
  projectId: "dadlaga-driver",
  storageBucket: "dadlaga-driver.appspot.com",
  messagingSenderId: "817141622493",
  appId: "1:817141622493:web:6e02fe048cd6bac3b01d34",
  measurementId: "G-7N2SGS3YZX",
};

// initialize firebase
export const app = initializeApp(firebaseConfig);
// initialize firestore
export const db = getFirestore(app);
// initialize firebase authentication
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
