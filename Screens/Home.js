import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { images, FONT } from "../constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.imageText}>Сайн байна уу?</Text>
        <Text style={styles.imageText}>Ганбаяр Батболд</Text>
      </View>
      <Image source={images.profile} style={styles.image} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex=start",
    marginTop: 15,
  },
  textContainer: {
    flexDirection: "column",
  },

  imageText: {
    marginLeft: 10,
    fontFamily: FONT.blackItalic,
  },
  image: {
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40,
    marginBottom: 10,
  },
});
