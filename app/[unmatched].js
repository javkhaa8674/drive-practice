import { Unmatched, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

const UnMatched = () => {
  const router = useRouter();
  console.log("Unmatched:", Unmatched);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Энэ хуудас олдсонгүй.</Text>
      <Pressable onPress={() => router.push("")}>
        <Text style={{ color: "blue", textDecoration: "underline" }}>
          Энд дарна уу
        </Text>
        {Unmatched}
      </Pressable>
    </View>
  );
};

export default UnMatched;
