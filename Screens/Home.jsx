import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { COLORS, FONT, SIZES, SHADOWS, images } from "../constants";
import { AuthStore, getUserInfo } from "../store/authStore";

const data = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
  { id: "10" },
];

const Home = ({ navigation }) => {
  const [selectedTraining, setSelectedTraining] = useState();
  const { loading, error, userInfo } = AuthStore.useState();

  useEffect(() => {
    getUserInfo(AuthStore.currentState.user.uid);
  }, [AuthStore.currentState.userInfo === null]);

  const handleCardPress = (item) => {
    navigation.navigate("ChooseDate");
    setSelectedTraining(item.training_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.imageText}>Сайн байна уу?</Text>
          <Text style={styles.imageText}>
            {AuthStore.currentState.user.displayName}
          </Text>
        </View>
        <Image source={images.profile} style={styles.image} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text style={styles.error}>Алдаа гарлаа!</Text>
      ) : (
        <FlatList
          data={data}
          style={{ flexGrow: 1 }}
          renderItem={({ item }) => (
            <View style={styles.flatContainer}>
              <View style={styles.flat}>
                <Text style={styles.flatHeader}>{item.id}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "column",
  },
  imageText: {
    marginLeft: 10,
    fontFamily: FONT.light,
  },
  image: {
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40,
    marginBottom: 10,
  },
  flatContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  flat: {
    width: "90%",
    height: 100,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  flatHeader: {
    color: COLORS.lightWhite,
  },
});
