import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View className="mt-5 mx-2.5">
        <Text className="text-3xl text-secondary-200 font-work-black">
          Hola mundo!
        </Text>
        <Text
          className="text-3xl text-tertiary"
          style={{ fontFamily: "WorkSans-Black" }}
        >
          Diego Trujillo
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
