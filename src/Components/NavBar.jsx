import { Feather } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { globalStyle } from "../../GlobalStyles";

function NavBar({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StatusBar
        backgroundColor={globalStyle.bg_2.backgroundColor}
        barStyle="light-content"
      />
      <View
        style={globalStyle.bg_2}
        className="bg-green-50 flex flex-row items-center justify-between p-6"
      >
        <Feather
          onPress={() => {
            navigation.toggleDrawer();
          }}
          color={"white"}
          name="menu"
          size={25}
        />
        <View className="flex flex-row items-center gap-x-3">
          <Text className="text-white tracking-widest text-lg">
            Split Bills
          </Text>
          <Image source={require("../../assets/cash.png")} />
        </View>
        <View></View>
      </View>
    </>
  );
}
export default React.memo(NavBar);
