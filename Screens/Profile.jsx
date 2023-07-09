import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import imagePlaceHolder from "../assets/images/kemal.jpg";
import Icon from "react-native-dynamic-vector-icons";
import { COLORS, FONT, SIZES } from "../constants";
import { AuthStore } from "../store/authStore";

const Profile = () => {
  const { loading, error, userInfo } = AuthStore.useState();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image source={imagePlaceHolder} size={80} />
              <View style={{ marginLeft: 20 }}>
                <Title
                  style={[styles.title, { marginTop: 15, marginBottom: 5 }]}
                >
                  {userInfo.displayName}
                </Title>
                <Caption style={styles.caption}>{userInfo.email}</Caption>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon
                name="map-marker-radius"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={{ color: COLORS.primary, marginLeft: 20 }}>
                {userInfo.address}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon
                name="phone"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={{ color: COLORS.primary, marginLeft: 20 }}>
                {userInfo.phoneNumber}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon
                name="phone"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={{ color: COLORS.primary, marginLeft: 20 }}>
                {userInfo.anotherPhoneNumber}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon
                name="email"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={{ color: COLORS.primary, marginLeft: 20 }}>
                {userInfo.email}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon
                name="calendar"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={{ color: COLORS.primary, marginLeft: 20 }}>
                {userInfo.dateOfBirth}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              { borderRightColor: "#dddddd", borderRightWidth: 1 },
            ]}
          >
            <Title>40000₮</Title>
            <TouchableOpacity>
              <Caption>Түрийвч</Caption>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Захиалга</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Icon
                name="heart-outline"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Icon
                name="credit-card"
                type="Entypo"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={styles.menuItemText}>Төлбөр</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Icon
                name="share-outline"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={styles.menuItemText}>Найзаа урих</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Icon
                name="account-check-outline"
                type="MaterialCommunityIcons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={styles.menuItemText}>Дэмжлэг</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Icon
                name="settings-outline"
                type="Ionicons"
                color={COLORS.tertiary}
                size={20}
              />
              <Text style={styles.menuItemText}>Тохиргоо</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#ddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
