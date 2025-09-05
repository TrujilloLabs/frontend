import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MainCategories = () => {
  return (
    <View className="px-4 mt-6 flex-row justify-between">
      {/* Restaurante */}
      <TouchableOpacity className="flex-1 bg-red-100 rounded-2xl p-6 mr-2 items-center">
        <Text className="text-4xl">🍔</Text>
        <Text className="mt-2 font-semibold">Restaurantes</Text>
      </TouchableOpacity>

      {/* Mercado */}
      <TouchableOpacity className="flex-1 bg-green-100 rounded-2xl p-6 ml-2 items-center">
        <Text className="text-4xl">🛒</Text>
        <Text className="mt-2 font-semibold">Mercado</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainCategories;
