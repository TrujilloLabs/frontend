import RefreshableList from "@/components/Refres";
import { useProducts } from "@/hooks/useProducts.hook";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function OffersScreen() {
  const { products, loading, error, isRefreshing, refreshProducts } =
    useProducts();

  if (loading)
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#e74423" />
      </View>
    );

  if (error)
    return (
      <View className="flex-1 items-center justify-center p-4 bg-white">
        <View className="bg-red-500 rounded-xl p-6 shadow-md items-center justify-center">
          <Text className="text-white text-lg font-semibold text-center mb-4">
            {error}
          </Text>
          <TouchableOpacity
            onPress={refreshProducts}
            className="bg-red-700 px-6 py-3 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Reintentar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  return (
    <View className="flex-1 bg-white p-4">
      <RefreshableList
        data={products}
        keyExtractor={(item) => item.id}
        refreshing={isRefreshing}
        onRefresh={refreshProducts}
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
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

//Ejemplo de List

{
  /* <View className="flex-1 bg-white p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        onRefresh={refreshProducts} // Llama a esta función cuando se arrastra
        refreshing={isRefreshing} // Muestra el indicador de carga de la lista
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
    </View> */
}
