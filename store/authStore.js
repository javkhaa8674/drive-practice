import { Store, registerInDevtools } from "pullstate";
import { doc, setDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth/react-native";
import { auth, db } from "../api/firebase/config";

export const AuthStore = new Store({
  isLoggedIn: false,
  initialized: false,
  user: null,
  loading: true,
  error: "",
});

const unsub = onAuthStateChanged(auth, (user) => {
  // console.log("onAuthStateChanged", user);
  AuthStore.update((store) => {
    store.user = user;
    store.isLoggedIn = user ? true : false;
    store.initialized = true;
    store.loading = false;
  });
});

export const appSignIn = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    AuthStore.update((store) => {
      store.user = resp.user;
      store.isLoggedIn = resp.user ? true : false;
      store.initialized = true;
      store.loading = false;
    });
    return { user: auth.currentUser };
  } catch (error) {
    AuthStore.update((store) => {
      store.loading = false;
      store.error = error.message;
    });
    return { error };
  }
};

export const appSignOut = async () => {
  try {
    await signOut(auth).then(() => {
      alert("User successfully signed out.");
    });
    AuthStore.update((store) => {
      store.user = null;
      store.isLoggedIn = false;
      store.loading = false;
    });
    return { user: null };
  } catch (error) {
    AuthStore.update((store) => {
      store.loading = false;
      store.error = error.message;
    });
    return { error };
  }
};

export const appSignUp = async (
  phoneNumber,
  anotherPhoneNumber,
  email,
  lastName,
  firstName,
  selectedGender,
  dateOfBirth,
  password,
  displayName
) => {
  try {
    // this will trigger onAuthStateChanged to update the store....
    const resp = await createUserWithEmailAndPassword(auth, email, password);

    // add the display name
    await updateProfile(resp.user, { displayName });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      phoneNumber,
      anotherPhoneNumber,
      email,
      lastName,
      firstName,
      selectedGender,
      dateOfBirth,
      password,
      displayName,
      role: "user",
    })
      .then(() => {
        //Data saved successfully
        console.log("data successfully saved users collection");
      })
      .catch((error) => {
        AuthStore.update((store) => {
          store.error = error.message;
        });
        return { error };
      });

    AuthStore.update((store) => {
      store.user = auth.currentUser;
      store.isLoggedIn = true;
      store.loading = false;
    });
    return { user: auth.currentUser };
  } catch (error) {
    AuthStore.update((store) => {
      store.loading = false;
      store.error = error.message;
    });
    return { error };
  }
};

registerInDevtools({ AuthStore });
