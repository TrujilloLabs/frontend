import { useProducts } from "@/hooks/useProducts.hook";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function OffersScreen() {
  const { products, loading, error } = useProducts();

  if (loading) return <ActivityIndicator size="large" color="#e74423" />;
  if (error)
    return (
      <Text className="flex-1 items-center justify-center bg-white">
        {error}
      </Text>
    );

  return (
    <View className="flex-1 bg-white p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-100 rounded-2xl p-4 mb-3">
            <Image
              source={{ uri: item.imageUrl }}
              className="w-full h-40 rounded-xl"
            />
            <Text className="mt-2 text-lg font-bold">{item.name}</Text>
            <Text className="text-gray-600 ">${item.price}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // 👈 espacio al final
      />
    </View>
  );
}
