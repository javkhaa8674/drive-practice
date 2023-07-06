import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const TeamTraining = ({ item, selectedTraining, handleCardPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.itemName}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.price}>
          <Text style={styles.priceText}>{item.price}төг</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Хугацаа:</Text>
          <Text style={styles.itemText}> {item.period}</Text>
        </View>
        {/* {item.info.map((el, key) => (
          <View key={key} style={styles.itemContainer}>
            <Text style={styles.itemText}>{el.name}:</Text>
            <Text style={styles.itemText}>{el.value}</Text>
          </View>
        ))} */}

        <View style={styles.logoContainer(selectedTraining, item)}>
          <Image
            source={item.employer_logo}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Сонгох</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamTraining;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: 150,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.light,
    fontSize: SIZES.large,
  },
  bodyContainer: {
    width: "100%",
    height: 120,
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  priceText: {
    color: COLORS.price,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  itemText: {
    fontSize: SIZES.small,
  },
  logoContainer: (selectedTraining, item) => ({
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  logoImage: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    // backgroundColor: "purple",
  },
  button: {
    width: "80%",
    height: 35,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 200,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
  },
});
