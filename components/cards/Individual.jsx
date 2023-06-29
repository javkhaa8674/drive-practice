import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { COLORS, SIZES } from "../../constants";

const IndividualTraining = ({ item, selectedTraining, handleCardPress }) => {
  return (
    <TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer(selectedTraining, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default IndividualTraining;

const styles = StyleSheet.create({
  logoContainer: (selectedTraining, item) => ({
    width: 250,
    height: 150,
    backgroundColor:
      selectedTraining === item.training_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
  },
});
