import React from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globalStyle } from "../../GlobalStyles";

function Splash_Screen() {
  const skip = " skip >> ";
  return (
    <SafeAreaView
      className="flex h-full justify-center items-center "
      style={globalStyle.bg}
    >
      <Text className="text-white tracking-widest text-3xl">Share Bills</Text>
      <Image className="" source={require("../../assets/splash_pic.png")} />
      <Pressable
        onPress={() => {
          Alert.alert("Skip pressed");
        }}
        className="absolute right-8 bottom-7"
      >
        <Text className="text-white tracking-widest text-sm">{skip}</Text>
      </Pressable>
    </SafeAreaView>
  );
}
export default Splash_Screen;
