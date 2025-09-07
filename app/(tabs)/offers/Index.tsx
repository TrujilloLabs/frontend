import { useProducts } from "@/hooks/useProducts.hook";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function OffersScreen() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );

  if (error)
    return (
      <View className="flex-1 items-center justify-center p-4 bg-white">
        {/* Contenedor de notificación para el error */}
        <View className="bg-red-500 rounded-xl p-6 shadow-md items-center justify-center">
          <Text className="text-white text-lg font-semibold text-center">
            {error}
          </Text>
        </View>
      </View>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   horizontal: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10
//   }
// });
// // (
//     <SafeAreaView style={[styles.container, styles.horizontal]}>
//       <ActivityIndicator />
//       {/* <ActivityIndicator size="large" />
//       <ActivityIndicator size="small" color="#0000ff" /> */}
//       <ActivityIndicator size="large" color="#00ff00" />
//     </SafeAreaView>
//   );
//
