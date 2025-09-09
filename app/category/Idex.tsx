// src/screens/CategoryDetailsScreen.tsx

import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import ProductCard from "@/components/ProductCard";
import SubcategoryCard from "@/components/SubcategoryCard";
import { useFetchCategoryData } from "@/hooks/useFetchCategoryData";
import { Product } from "../../interfaces/index";

const CategoryDetailsScreen = () => {
  const router = useRouter();
  const { categoryId, subcategoryId } = useLocalSearchParams();
  const {
    subcategories,
    products,
    loading,
    error,
    refreshCategory,
    isRefreshing
  } = useFetchCategoryData();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e74423" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            onPress={refreshCategory}
            style={styles.refreshButton}
          >
            <Text style={styles.refreshButtonText}>Reintentarrr</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.subcatListContainer}>
      <FlatList
        data={subcategories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <SubcategoryCard id={item.id} name={item.name} icon={item.imageUrl} />
        )}
      />
    </View>
  );

  // --- Renderizado Condicional de Productos ---

  // Caso 1: Se ha seleccionado una subcategoría
  // Los productos se muestran en dos columnas verticales
  if (subcategoryId) {
    if (products.length === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Subcategoría</Text>
            <View style={{ flex: 1 }} />
            <Ionicons name="search" size={28} color="black" />
          </View>
          {renderHeader()}
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No hay productos para mostrar en esta subcategoría.
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Subcategoría...</Text>
          <View style={{ flex: 1 }} />
          <Ionicons name="search" size={28} color="black" />
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2} // 🚨 Dos columnas
          onRefresh={refreshCategory}
          refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10
          }}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </View>
    );
  }

  // Caso 2: Solo se ha seleccionado la categoría principal
  // Los productos se agrupan y se muestran en secciones con scroll horizontal
  if (categoryId)
    if (products.length === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Categoría</Text>
            <View style={{ flex: 1 }} />
            <Ionicons name="search" size={28} color="black" />
          </View>
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay productos para mostrar.</Text>
            <TouchableOpacity
              onPress={refreshCategory}
              style={styles.refreshButton}
            >
              <Text style={styles.refreshButtonText}>Reintentar</Text>
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

  const renderProductGroup = ({ item: subcatName }: { item: string }) => {
    const sectionProducts = groupedProducts[subcatName];
    if (sectionProducts.length === 0) return null;

    return (
      <View style={styles.productGroupContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{subcatName}</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>Ver más</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={sectionProducts}
          keyExtractor={(product) => product.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: product }) => <ProductCard product={product} />}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pasillo</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name="search" size={28} color="black" />
      </View>
      <FlatList
        data={Object.keys(groupedProducts)}
        keyExtractor={(item) => item}
        renderItem={renderProductGroup}
        ListHeaderComponent={renderHeader}
        onRefresh={refreshCategory}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  // container: { flex: 1, backgroundColor: "#f5f5f5" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white"
  },
  errorBox: {
    backgroundColor: "#ef4444",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center"
  },
  errorText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16
  },
  refreshButton: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8
  },
  refreshButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb"
  },
  headerTitle: {
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 18
  },
  subcatListContainer: { paddingHorizontal: 16, paddingVertical: 10 },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { color: "#888", fontSize: 16 },
  productGroupContainer: { marginTop: 24, paddingHorizontal: 16 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  sectionTitle: { fontWeight: "bold", fontSize: 20 },
  seeMoreText: { fontSize: 14, color: "#6b7280" }
});

export default CategoryDetailsScreen;
