import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const IndividualTraining = ({ item, selectedTraining, handleCardPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.itemName}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>{item.price}төг</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Хугацаа:</Text>
        <Text>{item.period}</Text>
      </View>

      {item.info.map((el) => (
        <View style={{ flexDirection: "row" }}>
          <Text>{el.name}:</Text>
          <Text>{el.value}</Text>
        </View>
      ))}

      <View style={styles.logoContainer(selectedTraining, item)}>
        <Image
          source={item.employer_logo}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Сонгох</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndividualTraining;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: 180,
    height: 250,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 40,
    flexDirection: "row",
    backgroundColor: COLORS.tertiary,
  },
  headerText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.light,
    fontSize: SIZES.large,
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    paddingVertical: 10,
  },
  priceText: {
    color: COLORS.price,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
  },
  logoContainer: (selectedTraining, item) => ({
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 35,
  }),
  logoImage: {
    width: 25,
    height: 25,
  },
  button: {
    width: 160,
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
