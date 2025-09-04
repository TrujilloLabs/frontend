import React from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <View className="items-center">
        <Image
          source={require("../assets/logo/logo.png")} // pon tu logo en /assets
          className="w-32 h-32 mb-4"
          resizeMode="contain"
        />
        <Text className="text-white text-3xl font-work-black">Mi Tienda</Text>
        <ActivityIndicator size="large" color="#fff" className="mt-6" />
      </View>
    </SafeAreaView>
  );
}
