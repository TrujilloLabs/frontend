// src/screens/CategoryDetailsScreen.tsx

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// 🚨 Importa tu custom hook
import { useFetchCategoryData } from "@/hooks/useFetchCategoryData";

import ProductCard from "@/components/ProductCard";
import SubcategoryCard from "@/components/SubcategoryCard";

// Asegúrate de que tus interfaces están en esta ruta
import RefreshableList from "@/components/Refres";
import { Product } from "../../interfaces/index";

const CategoryDetailsScreen = () => {
  const router = useRouter();
  // 🚨 Usa el hook para obtener los datos y el estado
  const {
    subcategories,
    products,
    loading,
    error,
    refreshCategory,
    isRefreshing
  } = useFetchCategoryData();

  if (loading)
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#e74423" />
      </View>
    );
  console.log("Error", error);
  if (error) {
    return (
      <View className="flex-1 items-center justify-center p-4 bg-white">
        <View className="bg-red-500 rounded-xl p-6 shadow-md items-center justify-center">
          <Text className="text-white text-lg font-semibold text-center mb-4">
            {error}
          </Text>
          <TouchableOpacity
            onPress={refreshCategory}
            className="bg-red-700 px-6 py-3 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Reintentar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.container}>
        <View className="flex-row items-center px-4 h-28 bg-white border-b border-gray-200">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>

          <Text className="ml-4 font-bold text-lg">Categoría</Text>

          <View className="flex-1" />

          <Ionicons name="search" size={28} color="black" />
        </View>

        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500 text-lg">
            No hay productos para mostrar.
          </Text>
          <TouchableOpacity
            onPress={refreshCategory}
            className="bg-red-700 px-6 py-3 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Reintentar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const groupedProducts: Record<string, Product[]> = products.reduce(
    (acc, product) => {
      const subcatName = product.subcategory.name;
      if (!acc[subcatName]) {
        acc[subcatName] = [];
      }
      acc[subcatName].push(product);
      return acc;
    },
    {} as Record<string, Product[]>
  );

  return (
    <View style={styles.container}>
      {/* <View className="flex-row items-center h-28 px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="ml-4 font-bold text-lg">Categoría</Text>
        <View className="flex-1" />
        <Ionicons name="search" size={24} color="black" />
      </View> */}

      <View className="flex-row items-center mt-4 px-4 h-28 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text className="ml-4 font-bold text-lg">Categoría</Text>

        <View className="flex-1" />

        <Ionicons name="search" size={28} color="black" />
      </View>

      <ScrollView>
        <RefreshableList
          data={subcategories}
          keyExtractor={(item) => item.id}
          refreshing={isRefreshing}
          onRefresh={refreshCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subcatListContainer}
          renderItem={({ item }) => (
            <SubcategoryCard id={item.id} name={item.name} icon={item.icon} />
          )}
        />
        {Object.keys(groupedProducts).map((subcatName) => (
          <View key={subcatName} className="mt-6 px-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="font-bold text-xl">{subcatName}</Text>
              <TouchableOpacity>
                <Text className="text-sm text-gray-500">Ver más</Text>
              </TouchableOpacity>
            </View>
            <RefreshableList
              data={groupedProducts[subcatName]}
              keyExtractor={(item) => item.id}
              refreshing={isRefreshing}
              onRefresh={refreshCategory}
              numColumns={2}
              renderItem={({ item }) => <ProductCard product={item} />}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subcatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10
  }
});

export default CategoryDetailsScreen;
