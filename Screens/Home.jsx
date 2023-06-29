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
    employer_logo: "https://picsum.photos/200/300",
    training_id: 1,
  },
  {
    employer_logo: "https://picsum.photos/id/237/200/300",
    training_id: 2,
  },
  {
    employer_logo: "https://picsum.photos/seed/picsum/200/300",
    training_id: 3,
  },
  {
    employer_logo: "https://picsum.photos/200/300?grayscale",
    training_id: 4,
  },
  {
    employer_logo: "https://picsum.photos/200/300?grayscale",
    training_id: 5,
  },
  {
    employer_logo: "https://picsum.photos/200/300",
    training_id: 6,
  },
  {
    employer_logo: "https://picsum.photos/id/237/200/300",
    training_id: 7,
  },
  {
    employer_logo: "https://picsum.photos/seed/picsum/200/300",
    training_id: 8,
  },
  {
    employer_logo: "https://picsum.photos/200/300?grayscale",
    training_id: 9,
  },
  {
    employer_logo: "https://picsum.photos/200/300?grayscale",
    training_id: 10,
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
            //keyExtractor={(item) => item.training_id}
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
      </View>{" "}
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
            //keyExtractor={(item) => item.training_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
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
    fontFamily: FONT.medium,
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
