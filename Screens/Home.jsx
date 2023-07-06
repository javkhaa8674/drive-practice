import React, { useState } from "react";
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
<<<<<<< HEAD
=======
  SafeAreaView,
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
} from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, images } from "../constants";
import { AuthStore } from "../store/authStore";
import { Individual, Team } from "../components";

const Data = [
  {
    employer_logo: require("../assets/icons/amazon.png"),
    training_id: "1",
    itemName: "Үндсэн",
    discount: "",
    info: [
      {
        name: "Price",
        value: "20000",
      },
      {
        name: "Хугацаа",
        value: "1 цаг",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/apple.png"),
    training_id: "2",
    discount: "30%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "7 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/calendar.png"),
    training_id: "3",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/enter.png"),
    training_id: "4",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/check.png"),
    training_id: "5",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/chevron-right.png"),
    training_id: "6",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/transaction.png"),
    training_id: "7",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/twitter.png"),
    training_id: "8",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/menu.png"),
    training_id: "9",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/microsoft.png"),
    training_id: "10",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
];
const Data2 = [
  {
    employer_logo: require("../assets/icons/amazon.png"),
    training_id: "100",
    itemName: "Үндсэн",
    discount: "",
    info: [
      {
        name: "Price",
        value: "20000",
      },
      {
        name: "Хугацаа",
        value: "2 цаг",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/apple.png"),
    training_id: "102",
    discount: "30%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/calendar.png"),
    training_id: "103",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/enter.png"),
    training_id: "104",
    discount: "45%",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/check.png"),
    training_id: "105",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/chevron-right.png"),
    training_id: "106",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/transaction.png"),
    training_id: "107",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/twitter.png"),
    training_id: "108",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/menu.png"),
    training_id: "109",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/microsoft.png"),
    training_id: "110",
    discount: "45%",
    info: [
      {
        name: "Price",
        value: "200000",
      },
      {
        name: "Хугацаа",
        value: "14 хоног",
      },
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
];

const Home = ({ navigation }) => {
  const { loading, error } = AuthStore.useState();
  const [selectedTraining, setSelectedTraining] = useState();

  const handleCardPress = (item) => {
    navigation.navigate("ChooseDate");
    setSelectedTraining(item.training_id);
  };

  return (
<<<<<<< HEAD
    <ScrollView>
=======
    <ScrollView nestedScrollEnabled>
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
      <View>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Text style={styles.imageText}>Сайн байна уу?</Text>
              <Text style={styles.imageText}>Ганбаяр Батболд</Text>
            </View>
            <Image source={images.profile} style={styles.image} />
          </View>
          <View style={styles.flatContainer}>
<<<<<<< HEAD
            <Text style={styles.headerTitle}>Ганцаарчилсан сургалт</Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
=======
            <View>
              <Text style={styles.headerTitle}>Ганцаарчилсан сургалт</Text>
            </View>
            <TouchableOpacity>
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
              <Text style={styles.headerBtn}>Дэлгэрэнгүй</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsContainer}>
            {loading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
              <Text style={styles.error}>Алдаа гарлаа!</Text>
            ) : (
              <FlatList
                data={Data}
<<<<<<< HEAD
=======
                style={{ flexGrow: 1 }}
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
                renderItem={({ item }) => (
                  <Individual
                    item={item}
                    selectedTraining={selectedTraining}
                    handleCardPress={handleCardPress}
                  />
                )}
                keyExtractor={(item) => item.training_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
              />
            )}
          </View>
          <View style={styles.flatContainer}>
            <Text style={styles.headerTitle}>Багийн сургалт</Text>
<<<<<<< HEAD
            <TouchableOpacity style={{ marginRight: 10 }}>
=======
            <TouchableOpacity>
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
              <Text style={styles.headerBtn}>Дэлгэрэнгүй</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsContainer}>
            {loading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
              <Text style={styles.error}>Алдаа гарлаа!</Text>
            ) : (
              <FlatList
                data={Data2}
                renderItem={({ item }) => (
                  <Team
                    item={item}
                    selectedTraining={selectedTraining}
                    handleCardPress={handleCardPress}
                  />
                )}
                keyExtractor={(item) => item.training_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
              />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 15,
  },
  headerContainer: {
=======
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 150,
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
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  header: {
    flexDirection: "column",
    marginLeft: 10,
  },
  imageText: {
    fontFamily: FONT.light,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  flatContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
    color: COLORS.primary,
    marginLeft: 10,
  },
  headerBtn: {
    marginRight: 10,
    fontSize: SIZES.small,
    fontFamily: FONT.light,
    color: COLORS.gray,
  },
<<<<<<< HEAD
  cardsContainer: {},
=======
  cardsContainer: {
    width: "100%",
    height: 250,
  },
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
});
