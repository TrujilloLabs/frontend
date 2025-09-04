import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Categoría {id}</Text>
      <Text className="text-gray-600 mt-2">
        Aquí van las subcategorías y productos...
      </Text>
    </View>
  );
}
