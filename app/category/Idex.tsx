import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

// Importa tus servicios
import { getSubcategoriesByCategory } from "@/services/categoryService";
import { getProductsByCategory } from "@/services/productService";

// Importa los componentes de las tarjetas
import ProductCard from "@/components/ProductCard";
import SubcategoryCard from "@/components/SubcategoryCard";

// Asegúrate de que tus interfaces están en esta ruta
import { Product, Subcategory } from "../../interfaces/index";

const CategoryDetailsScreen = () => {
  const { categoryId, subcategoryId } = useLocalSearchParams();
  const router = useRouter();

  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          typeof categoryId !== "string" &&
          typeof subcategoryId !== "string"
        ) {
          setLoading(false);
          console.error("No se proporcionó un ID de categoría o subcategoría.");
          return;
        }

        const subcatData = await getSubcategoriesByCategory(
          categoryId as string
        );

        // 🚨 Pasar el subcategoryId a la petición si existe
        const productsData = await getProductsByCategory(
          categoryId as string,
          subcategoryId as string
        );

        const subcategoriesWithIcons = subcatData.map((subcat) => ({
          ...subcat,
          icon: "💊"
        }));

        setSubcategories(subcategoriesWithIcons);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId, subcategoryId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
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
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="ml-4 font-bold text-lg">Categoría</Text>
        <View className="flex-1" />
        <Ionicons name="search" size={24} color="black" />
      </View>

      <ScrollView>
        <FlatList
          data={subcategories}
          keyExtractor={(item) => item.id}
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
            <FlatList
              data={groupedProducts[subcatName]}
              keyExtractor={(item) => item.id}
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
