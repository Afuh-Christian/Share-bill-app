import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { globalStyle } from "../../GlobalStyles";
import { AntDesign } from "react-native-vector-icons";

function HomePage() {
  return (
    <>
      <ScrollView className="h-full" style={globalStyle.bg}>
        <View className="flex flex-row flex-wrap justify-center gap-2 pt-2">
          {["Project Name", "Bill Type", "Partition"].map((drop) => (
            <Pressable
              key={drop}
              className="px-3 py-2  rounded-lg  flex flex-row items-center gap-x-2 "
              style={{ ...globalStyle.bg_2 }}
              onPress={() => {
                Alert.alert("Pop opend");
              }}
            >
              <Text className="text-white">{drop}</Text>
              <AntDesign color={"white"} name="caretdown" size={14} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
export default HomePage;
