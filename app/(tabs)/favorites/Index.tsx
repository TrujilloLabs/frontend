import React from "react";
import { Text, View } from "react-native";

const FavoriteScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Favoritos</Text>
      <Text className="text-gray-600 mt-2">
        Aquí van los favortos del cliente TrujiStudios
      </Text>
    </View>
  );
};

export default FavoriteScreen;
