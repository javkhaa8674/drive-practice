import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./individualcard.style";

const IndividualCard = ({ item, selectedTraining, handleCardPress }) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <TouchableOpacity>
        {/* <Image source={{ uri: item.employer_logo }} /> */}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default IndividualCard;
