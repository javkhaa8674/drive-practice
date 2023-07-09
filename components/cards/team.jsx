import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONT, SHADOWS } from "../../constants";

const TeamTraining = ({ item, selectedTraining, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
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
              {el.name === "Хугацаа" ? (
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
              ) : (
                <></>
              )}
            </View>
          ))}
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={item.employer_logo}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCardPress}>
            <Text style={styles.buttonText}>Сонгох</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TeamTraining;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 200,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    shadowColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    flexDirection: "row",
  },
  headerText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.light,
    fontSize: SIZES.large,
  },
  bodyContainer: {
    width: "100%",
    height: 160,
    borderBottomRightRadius: SIZES.large,
    borderBottomLeftRadius: SIZES.large,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
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
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logoImage: {
    width: 30,
    height: 30,
  },
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
  buttonContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
  },
  button: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    marginBottom: 15,
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontWeight: 200,
    fontSize: SIZES.large,
    fontFamily: FONT.light,
  },
});
