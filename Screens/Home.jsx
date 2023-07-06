import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { COLORS, FONT, SIZES, SHADOWS, images } from "../constants";
import { AuthStore } from "../store/authStore";
import { Individual, Team } from "../components";

const Data = [
  {
    employer_logo: require("../assets/icons/amazon.png"),
    training_id: "1",
    price: 20000,
    itemName: "Үндсэн",
    period: "1цаг",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/apple.png"),
    training_id: "2",
    price: 200000,
    itemName: "Хэмнэлт 30%",
    period: "7 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/calendar.png"),
    training_id: "3",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/enter.png"),
    training_id: "4",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/check.png"),
    training_id: "5",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/chevron-right.png"),
    training_id: "6",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/transaction.png"),
    training_id: "7",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/twitter.png"),
    training_id: "8",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/menu.png"),
    training_id: "9",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/microsoft.png"),
    training_id: "10",
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
];
const Data2 = [
  {
    employer_logo: require("../assets/icons/amazon.png"),
    training_id: 100,
    price: 20000,
    itemName: "Үндсэн",
    period: "1цаг",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/apple.png"),
    training_id: 102,
    price: 200000,
    itemName: "Хэмнэлт 30%",
    period: "7 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/calendar.png"),
    training_id: 103,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/enter.png"),
    training_id: 104,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/check.png"),
    training_id: 105,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/chevron-right.png"),
    training_id: 106,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/transaction.png"),
    training_id: 107,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/twitter.png"),
    training_id: 108,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/menu.png"),
    training_id: 109,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
  {
    employer_logo: require("../assets/icons/microsoft.png"),
    training_id: 110,
    price: 200000,
    itemName: "Хэмнэлт 45%",
    period: "14 хоног",
    info: [
      {
        name: "Бензин",
        value: "Дадлагажигч хариуцна",
      },
      {
        name: "Өдөрт дадлага хийх хугацаа",
        value: 2,
      },
    ],
  },
];

const Home = () => {
  const { loading, error } = AuthStore.useState();
  const [selectedTraining, setSelectedTraining] = useState();

  const handleCardPress = (item) => {
    //  navigation.push(`/job-details/${item.job_id}`);
    setSelectedTraining(item.training_id);
  };

  return (
    <ScrollView>
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
            <Text style={styles.headerTitle}>Ганцаарчилсан сургалт</Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
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
            <TouchableOpacity style={{ marginRight: 10 }}>
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
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 15,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: SIZES.large,
    fontFamily: FONT.light,
    color: COLORS.primary,
    marginLeft: 10,
  },
  headerBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.light,
    color: COLORS.gray,
  },
  cardsContainer: {},
});
