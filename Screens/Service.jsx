import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { AuthStore } from "../store/authStore";
import { COLORS, SIZES, images, FONT } from "../constants";
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
const Data3 = [
  {
    id: "1",
    name: "First",
    title: "Ганцаарчилсан сургалт",
    body: "Дэлгэрэнгүй",
  },
  { id: "2", name: "Second", title: "Багийн сургалт", body: "Дэлгэрэнгүй" },
];

const Service = ({ navigation }) => {
  const { loading, error, userInfo } = AuthStore.useState();
  const [selectedTraining, setSelectedTraining] = useState();

  const handleCardPress = (item) => {
    navigation.navigate("ChooseDate");
    setSelectedTraining(item.training_id);
  };
  return (
    <SafeAreaView style={{ justifyContent: "center" }}>
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
          data={Data3}
          style={{ flexGrow: 1 }}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View
                style={{
                  width: "100%",
                }}
              >
                <View style={styles.flatContainer}>
                  <View>
                    <Text style={styles.headerTitle}>{item.title}</Text>
                  </View>
                </View>
                <View style={styles.cardsContainer}>
                  {loading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                  ) : error ? (
                    <Text style={styles.error}>Алдаа гарлаа!</Text>
                  ) : item.id === "1" ? (
                    <FlatList
                      data={Data}
                      style={{ flexGrow: 1 }}
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
                  ) : (
                    <FlatList
                      data={Data2}
                      style={{ flexGrow: 1 }}
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
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </SafeAreaView>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
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
  cardsContainer: {
    width: "100%",
  },
});
