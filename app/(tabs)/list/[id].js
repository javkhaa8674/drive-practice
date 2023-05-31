import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

const NewsDetailsPage = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Text>My News ID:{id}</Text>
    </View>
  );
};

export default NewsDetailsPage;
