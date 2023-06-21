import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_FQLT3uBwm8-dZcE76rk70WW_jxtKDwU",
  authDomain: "dadlaga-driver.firebaseapp.com",
  projectId: "dadlaga-driver",
  storageBucket: "dadlaga-driver.appspot.com",
  messagingSenderId: "817141622493",
  appId: "1:817141622493:web:6e02fe048cd6bac3b01d34",
  measurementId: "G-7N2SGS3YZX",
};

const app = initializeApp(firebaseConfig);

export default app;
