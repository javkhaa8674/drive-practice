import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
<<<<<<< HEAD
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
=======
import { COLORS, SIZES, FONT, SHADOWS } from "../../constants";

const TeamTraining = ({ item, selectedTraining, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {item.discount === "" ? item.itemName : "Хэмнэлт " + item.discount}
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.info}>
          {item.info.map((el, key) => (
            <View key={key}>
              {el.name === "Price" ? (
                <Text style={{ fontSize: SIZES.xLarge, color: COLORS.primary }}>
                  {el.value} төг
                </Text>
              ) : (
                <></>
              )}
            </View>
          ))}
        </View>

        <View style={[styles.info, { justifyContent: "flex,start" }]}>
          {item.info.map((el, key) => (
            <View key={key} style={{ width: "100%", marginHorizontal: 5 }}>
              {el.name === "Price" ? (
                <></>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ color: COLORS.tertiary }}>{el.name}:</Text>
                  </View>
                  <View
                    style={{
                      width: "50%",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ color: COLORS.primary }}>{el.value}</Text>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
        <View style={styles.logoContainer}>
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
          <Image
            source={item.employer_logo}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
<<<<<<< HEAD
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Сонгох</Text>
        </TouchableOpacity>
      </View>
    </View>
=======
        <TouchableOpacity style={styles.button} onPress={handleCardPress}>
          <Text style={styles.buttonText}>Сонгох</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
  );
};

export default TeamTraining;

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
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
=======
    flex: 1,
    justifyContent: "flex-start",
    width: 180,
    height: 200,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.primary,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  header: {
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
  },
  headerText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.light,
    fontSize: SIZES.large,
  },
  bodyContainer: {
    width: "100%",
<<<<<<< HEAD
    height: 120,
=======
    height: "100%",
    borderBottomRightRadius: SIZES.large,
    borderBottomLeftRadius: SIZES.large,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    width: "100%",
    paddingVertical: 10,
=======
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
  },
  priceText: {
    color: COLORS.price,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
  },
<<<<<<< HEAD
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
=======
  info: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  logoImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.tertiary,
  },
  button: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    marginBottom: 15,
>>>>>>> 91faa6485cf0980c7526b30e398a29a4e3baff36
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 200,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
  },
});
