import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  id: string;
  name: string;
  icon?: string;
}

const SubcategoryCard: React.FC<Props> = ({ id, name, icon }) => {
  const router = useRouter();

  const handlePress = () => {
    // 🚨 Pasar el ID como un parámetro en la URL
    router.push({
      pathname: "/category/Idex",
      params: { subcategoryId: id }
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} className="items-center mr-4">
      <View className="bg-gray-100 rounded-full w-16 h-16 items-center justify-center">
        {icon ? (
          <Text className="text-4xl">{icon}</Text>
        ) : (
          <Ionicons name="medkit-outline" size={30} color="#000" />
        )}
      </View>
      <Text className="text-xs text-center mt-2 font-medium">{name}</Text>
    </TouchableOpacity>
  );
};

export default SubcategoryCard;
