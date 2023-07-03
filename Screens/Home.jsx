import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS, FONT, SIZES, SHADOWS, images } from "../constants";
import { AuthStore } from "../store/authStore";
import { Individual } from "../components";

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
        <TouchableOpacity>
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
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Дэлгэрэнгүй</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Алдаа гарлаа!</Text>
        ) : (
          // <FlatList
          //   data={Data2}
          //   renderItem={({ item }) => (
          //     <Individual
          //       item={item}
          //       selectedTraining={selectedTraining}
          //       handleCardPress={handleCardPress}
          //     />
          //   )}
          //   keyExtractor={(item) => item.training_id}
          //   contentContainerStyle={{ columnGap: SIZES.medium }}
          //   horizontal
          // />
          <View></View>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex=start",
    marginTop: 15,
  },
  headerContainer: { flexDirection: "row", justifyContent: "space-between" },
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.light,
    color: COLORS.primary,
  },
  flat: {},
  headerBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.light,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});
